import { useState } from 'react';

export function Todolist() {
  const [todoDescription, setTodoDescription] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [editItemId, setEditItemId] = useState(null); // Changed this to hold the ID of the item being edited

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoDescription.trim() === '') {
      setError('Input field cannot be empty.');
      return;
    }

    if (editItemId !== null) {
      // Edit functionality
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItemId
            ? { ...item, description: todoDescription }
            : item
        )
      );
      setEditItemId(null);
    } else {
      // Add new item
      const newItem = {
        id: items.length + 1,
        description: todoDescription,
        done: false,
      };
      setItems((prev) => [...prev, newItem]);
    }

    setTodoDescription('');
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
      setTodoDescription(editTodo.description); // Set the description in the input for editing
      setEditItemId(id); // Set the ID of the item being edited
    }
  };

  const todoDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

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
            id: {toDo.id} - {toDo.description}
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