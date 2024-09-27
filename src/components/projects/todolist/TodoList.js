import { useState, useEffect } from 'react';

export default function Todolist() {
  const [todoList, setTodo] = useState('');
  const [items, setItems] = useState(() => {
    const t = localStorage.getItem('items');
    return t ? JSON.parse(t) : []
  });
  const [error, setError] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const [nextId, setNextId] = useState(() => {
    const nextId = localStorage.getItem('nextId');
    return nextId ? parseInt(nextId) : 1;
  })
  useEffect(() => {
    localStorage.setItem('nextId', nextId.toString());
    localStorage.setItem('items', JSON.stringify(items))
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoList.trim() === '') {
      setError('Input field cannot be empty.');
      return;
    }

    if (editItemId !== null) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItemId
            ? { ...item, description: todoList }
            : item
        )
      );
      setEditItemId(null);
    }
    else {
      const newItem = {
        id: nextId,
        description: todoList,
        done: false,
      };
      setItems((prev) => [...prev, newItem]);
      setNextId(parseInt(nextId) + 1)
    }
    console.log(nextId)
    setTodo('');
    setError('');
  };

  const setAchieved = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const todoEdit = (id) => {
    const editTodo = items.find((i) => i.id === id);
    if (editTodo) {
      setTodo(editTodo.description);
      setEditItemId(id);
    }
  };

  const todoDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteAll = () => {
    localStorage.clear()
    setItems([]);
    setNextId(1);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          To Do:
          <input
            type="text"
            value={todoList}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <button type="submit">{editItemId !== null ? 'Update' : 'Add'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <ul>
        {items.map((toDo) => (
          <li key={toDo.id}>
            <input
              type="checkbox"
              onChange={() => setAchieved(toDo.id)}
              checked={toDo.done}
            />
            <span style={{ marginLeft: "10px" }}>
              {toDo.done ? <del>{toDo.description}</del> : toDo.description}
            </span>
            <button onClick={() => todoEdit(toDo.id)}>Edit</button>
            <button onClick={() => todoDelete(toDo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={deleteAll}>Delete All</button>
    </main>
  );
}