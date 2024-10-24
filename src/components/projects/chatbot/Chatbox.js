import { useState } from "react";

export default function Chatbox(props) {
  const [newMessage, setNewMessage] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      text: newMessage,
      user: "human",
    };

    props.onSubmit(message);
    setNewMessage("");
  };

  return (
    <div className="">
      <form className="col-10" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            aria-label="Mensaje"
            value={newMessage}
            placeholder="Mensaje..."
            onChange={(e) => setNewMessage(e.target.value)}
            className="form-control text-input p-2"
            type="text"
            autoFocus
          />
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
