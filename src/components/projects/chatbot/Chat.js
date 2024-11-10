import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Messages from "./Messages";
import ChatBox from "./Chatbox";
import Swal from "sweetalert2";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher("62b7cae09e7061f924f7", {
      cluster: "sa1"
    })
    const channel = pusher.subscribe("chat")
    channel.bind("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data.message]);
   })
   return () => {
    channel.unbind_all();
    channel.unsubscribe();
   }
  }, []);

  useEffect(() =>{
    Swal.fire({
      title: "¡Aviso!",
      text: "El bot se encuentra en constante entrenamiento y las respuestas pueden no ser las esperadas.",
      icon: "warning",
      confirmButtonText: 'Aceptar'
    })
  }, [])

  return (
    <div className="container">
      <div className="row mt-3">
        <h1 className="text-center">GerBot</h1>
        <div aria-live="polite" className="flex-grow-1">
        <Messages messages={messages}></Messages>
        </div>
        <div className="">
          <ChatBox setMessages={setMessages}></ChatBox>
        </div>
      </div>
    </div>
  );
}
