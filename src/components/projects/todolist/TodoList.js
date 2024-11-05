import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function Todolist() {
  const swalAlert = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success mx-3",
      cancelButton: "btn btn-danger mx-3",
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
      setError("Las tareas deben tener un minimo caracter.");
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
      setError("Solo se pueden editar tareas incompletas.");
      return;
    } else {
      setTodo(editTodo.description);
      setEditItemId(id);
    }
    setError("");
  };

  const todoDelete = (id) => {
    swalAlert
    .fire({
      title: "Estas seguro?",
      text: "Se eliminara la tarea",
      showCancelButton: true, 
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
      reverseButtons: false,
    })
    .then((result) => {
      if(result.isConfirmed){
        setItems((prev) => prev.filter((item) => item.id !== id));
        swalAlert.fire({
          title: "Tarea eliminada.",
        })
      } else {
        swalAlert.fire({
          title: "Operacion cancelada."
        })
      }
    })
    
  };

  const deleteAll = () => {
    swalAlert
      .fire({
        title: "Estas seguro?",
        text: "Se eliminaran todas las tareas guardadas",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          setItems([]);
          setNextId(1);
          swalAlert.fire({
            title: "Tareas eliminadas.",
            icon: "success",
          });
        } else {
          swalAlert.fire({
            title: "Operacion cancelada",
          });
        }
      });
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6 offset-3">
          <form className="form todo-container" onSubmit={handleSubmit}>
            <label>
              Tareas:
              <br />
              <input
                className="form-control todo-input"
                type="text"
                value={todoList}
                maxLength={maxLength}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button className="btn btn-primary mx-1" type="submit">
                {editItemId !== null ? "Editar" : "Nuevo"}
              </button>
              {editItemId !== null && <button className="btn btn-danger">Cancelar</button>}         
              {error && <p style={{ color: "red" }}>{error}</p>}
            </label>
            <button className="btn btn-danger mx-1" onClick={deleteAll}>
              Borrar todo
            </button>
            <br />
            {todoList.length}/{maxLength}
          </form>
            <div className="row">
              <div className="col-lg-8 col-6">
                <h5>Tareas</h5>
              </div>
              <div className="col-lg-4 col-2 text-end">
                <h5>Acciones</h5>
              </div>
            <div className="container">
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
                      <div className="col-lg-4 col-2 ">
                        <div className="d-flex justify-content-end">
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
      </div>
    </div>
  );
}
