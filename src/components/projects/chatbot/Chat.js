import { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./Messages";
import ChatBox from "./ChatBox";
import Swal from "sweetalert2";

const socket = io("https://lakebot-api.vercel.app/");

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  useEffect(() =>{
    Swal.fire({
      title: "¡Aviso!",
      text: "El bot se encuentra en constante entrenamiento y las respuestas pueden no ser las esperadas.",
      icon: "warning",
      confirmButtonText: 'Aceptar'
    })
  })

  return (
    <div className="container">
      <div className="row mt-3">
        <h1 className="text-center">GerBot</h1>
        <div aria-live="polite" className="flex-grow-1">
        <Messages messages={messages}></Messages>
        </div>
        <div className="">
          <ChatBox setMessages={setMessages} socket={socket}></ChatBox>
        </div>
      </div>
    </div>
  );
}
