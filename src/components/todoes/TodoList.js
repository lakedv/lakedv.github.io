import { useState } from 'react';

export function Todolist() {
  const [todoDescription, setTodoDescription] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const storedTodo = localStorage.getItem('toDo')



  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoDescription.trim() === '') {
      setError('Input field cannot be empty.');
      return;
    }

    if (editItemId !== null) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItemId
            ? { ...item, description: todoDescription }
            : item
        )
      );
      setEditItemId(null);
    }
    else {
      const newItem = {
        id: items.length + 1,
        description: todoDescription,
        done: false,
      };
      setItems((prev) => [...prev, newItem]);
      const toDo = document.querySelector(".newItem").value;
      toDo.textContent = newItem;
      localStorage.setItem('toDo', JSON.stringify(newItem))
    }

    setTodoDescription('');
    setError('');
  };

  if (storedTodo) {
    const todoData = JSON.parse(storedTodo)
  }
  else {
    alert('No To Do saved on storage.')
  }

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
      setTodoDescription(editTodo.description);
      setEditItemId(id);
    }
  };

  const todoDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    localStorage.removeItem('toDo')
  };

  const displayTodo = () => {
    const storedTodo = localStorage.getItem('toDo')

    if (storedTodo) {
      toDo.textContent = storedTodo
    } else {
      toDo.textContent = 'No To Do saved on storage.'
    }
  }
  

  const deleteAll = () => {
    localStorage.clear()
  }

  const confirmDel = () => {
    localStorage.clear()  // Borrar todo el almacenamiento.
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          To Do:
          <input
            type="text"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        </label>
        <button type="submit">{editItemId !== null ? 'Update' : 'Add'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <ul>
        {items.map((toDo) => (
          <li key={toDo.id}>
            id: {toDo.id} - {toDo.description} {displayTodo}
            <input
              type="checkbox"
              onChange={() => setAchieved(toDo.id)}
              checked={toDo.done}
            />
            <button onClick={() => todoEdit(toDo.id)}>Edit</button>
            <button onClick={() => todoDelete(toDo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}