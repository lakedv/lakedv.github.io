import { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./Messages";
import ChatBox from "./ChatBox";

const socket = io("https://lakebot-api.vercel.app/");

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receiveMessage");
  }, []);

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
