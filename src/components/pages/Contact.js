import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mpwzzbwv");
  if (state.succeeded) {
    return alert("Mensaje enviado con exito");
  }
  return (
    <div className="container">
      <h1 className="title-h1 text-center">Contacto</h1>
      <div className="row mt-3">
        <div className="col-6 offset-3 card shadow">
          <form className="form" onSubmit={handleSubmit}>
            <div className="row mb-3">

            </div>
            <div className="row mb-3">
              <div className="col-10 offset-1">
                <div className="form-floating">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="email@example.com"
                    required
                  />
                  <label for="email">Email</label>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-10 offset-1">
                <div className="form-floating">
                  <input
                    id="asunto"
                    name="asunto"
                    placeholder="Asunto"
                    className="form-control"
                  />
                  <label for="asunto">Asunto</label>
                  <ValidationError
                    prefix="Asunto"
                    field="asunto"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-10 offset-1">
                <div className="form-floating">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-control"
                    placeholder="Mensaje"
                  />
                  <label for="mensaje">Mensaje</label>
                  <ValidationError
                    prefix="Mensaje"
                    field="mensaje"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 text-center">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={state.submitting}
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
