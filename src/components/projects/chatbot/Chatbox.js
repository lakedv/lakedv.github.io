import { useState } from "react";

export default function ChatBox({setMessages}) {
  const [message, setMessage] = useState("");
  let apiUrl = '';
  const env = process.env.NODE_ENV

  if(env === "development"){
    apiUrl = "http://localhost:3001"
    console.log("Servidor alojado en localhost:3001")
  } else {
    apiUrl = "https://lakebot-api.vercel.app"
    console.log("Servidor alojado en app-vercel")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prev) => [...prev, message]);

    try {
    await fetch(`${apiUrl}/Chatbot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({message}),
    }) 
    setMessage("");
  } catch(error){
    console.error("Error al enviar mensaje:", error);
    alert("Hubo un problema con la conexion al servidor")
  };
}
  return (
    <div className="">
      <form className="offset-2 col-8" onSubmit={handleSubmit}>
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
