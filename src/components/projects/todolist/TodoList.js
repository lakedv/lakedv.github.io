import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function Todolist() {
  const swalAlert = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  const maxLength = 50;
  const [todoList, setTodo] = useState("");
  const [items, setItems] = useState(() => {
    const t = localStorage.getItem("items");
    return t ? JSON.parse(t) : [];
  });
  const [error, setError] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [nextId, setNextId] = useState(() => {
    const nextId = localStorage.getItem("nextId");
    return nextId ? parseInt(nextId) : 1;
  });
  useEffect(() => {
    localStorage.setItem("nextId", nextId.toString());
    localStorage.setItem("items", JSON.stringify(items));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoList.trim() === "") {
      setError("Input field cannot be empty.");
      return;
    }

    if (editItemId !== null) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItemId ? { ...item, description: todoList } : item
        )
      );
      setEditItemId(null);
    } else {
      const toDo = {
        id: nextId,
        description: todoList,
        done: false,
      };
      setItems((prev) => [...prev, toDo]);
      setNextId(parseInt(nextId) + 1);
    }
    console.log(nextId);
    setTodo("");
    setError("");
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
      setError("You can only edit uncompleted Items.");
      return;
    } else {
      setTodo(editTodo.description);
      setEditItemId(id);
    }
    setError("");
  };

  const todoDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteAll = () => {
    swalAlert
      .fire({
        title: "Are you sure?",
        text: "You will delete all the cache.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Proceed",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          setItems([]);
          setNextId(1);
          swalAlert.fire({
            title: "Cache deleted.",
            icon: "success",
          });
        } else {
          swalAlert.fire({
            title: "Operation aborted.",
          });
        }
      });
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <form className="todo-container" onSubmit={handleSubmit}>
          <label>
            To Do:
            <br />
            <input
              className="form-control todo-input"
              type="text"
              value={todoList}
              maxLength={maxLength}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button className="btn btn-primary mx-1" type="submit">
              {editItemId !== null ? "Update" : "Add"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </label>
          <button className="btn btn-danger mx-1" onClick={deleteAll}>
            Delete All
          </button>
          <br />
          {todoList.length}/{maxLength}
        </form>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-6">
              <h5>Tareas</h5>
            </div>
            <div className="col-lg-4 col-2">
              <h5>Acciones</h5>
            </div>
          </div>
          <div className="row my-1">
            <ul className="todo-list">
              {items.map((toDo) => (
                <li className="row" key={toDo.id}>
                  <div className="col-lg-8 col-6">
                    <input
                      type="checkbox"
                      onChange={() => setAchieved(toDo.id)}
                      checked={toDo.done}
                    />
                    {toDo.done ? (
                      <del className="todo-done">{toDo.description}</del>
                    ) : (
                      toDo.description
                    )}
                  </div>
                  <div className="col-lg-4 col-2">
                    <div className="d-flex">
                    <button
                      className="btn btn-warning mx-1 mt-1"
                      onClick={() => todoEdit(toDo.id)}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                      className="btn btn-danger mx-1 mt-1"
                      onClick={() => todoDelete(toDo.id)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
