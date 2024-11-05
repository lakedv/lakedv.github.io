import { useState } from "react";

export default function ChatBox(props) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setMessages((prev) => [...prev, message]);

    props.socket.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <div className="">
      <form className="col-10" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            aria-label="Mensaje"
            value={message}
            placeholder="Mensaje..."
            onChange={(e) => setMessage(e.target.value)}
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
