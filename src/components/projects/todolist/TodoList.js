import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

export default function Todolist() {

  const swalAlert = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  })
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
      const toDo = {
        id: nextId,
        description: todoList,
        done: false,
      };
      setItems((prev) => [...prev, toDo]);
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
    if (editTodo.done) {
        setError('You can only edit uncompleted Items.')
        return;
    } else  {
      setTodo(editTodo.description);
      setEditItemId(id);
    }
    setError('')
  };

  const todoDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteAll = () => {
    swalAlert.fire({
      title: "Are you sure?",
      text: "You will delete all the cache.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Proceed",
      cancelButtonText: "Cancel",
      reverseButtons: true
    }).then((result)=> {
      if(result.isConfirmed){
        localStorage.clear()
        setItems([]);
        setNextId(1);
        swalAlert.fire({
          title: "Cache deleted.",
          icon: "success"
        });
      } else {
        swalAlert.fire({
          title: "Operation aborted."
        })
      }
    })
  }



  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label >
          To Do:<br/>
          <input
            className='todo-input'
            type="text"
            value={todoList}
            onChange={(e) => setTodo(e.target.value)}
          />
        <button className='todo-add-button' type="submit">{editItemId !== null ? 'Update' : 'Add'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </label>
      </form>
      <ul className='todo-list'>
        {items.map((toDo) => (
          <li key={toDo.id}>
            <input
              type="checkbox"
              onChange={() => setAchieved(toDo.id)}
              checked={toDo.done}
            />
            <span style={{ marginLeft: "10px" }}>
              {toDo.done ? <del className='todo-done'>{toDo.description}</del> : toDo.description}
            </span>
            <button className='todo-edit-button' onClick={() => todoEdit(toDo.id)}><FontAwesomeIcon icon={faPen} /></button>
            <button className='todo-del-button' onClick={() => todoDelete(toDo.id)}><FontAwesomeIcon icon={faXmark} /></button>
          </li>
        ))}
      </ul>
      <button className='todo-delall-button' onClick={deleteAll}>Delete All</button>
    </main>
  );
}








