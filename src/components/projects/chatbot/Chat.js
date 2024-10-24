import { useState, useRef, useEffect } from "react";
import Messages from "./Messages";
import Chatbox from "./Chatbox";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const msgEndRef = useRef(null);

  const sendMessage = (newMessage) => {
    setMessages((messages) => [...messages, newMessage]);
  };

  useEffect(() => {
    if (msgEndRef.current) {
      msgEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="container">
      <div className="row mt-3">
        <h1 className="text-center">GerBot</h1>
        <div aria-live="polite" className="flex-grow-1 overflow-auto">
          <Messages messages={messages}></Messages>
          <div ref={msgEndRef} />
        </div>
        <div className="">
          <Chatbox onSubmit={sendMessage}></Chatbox>
        </div>
      </div>
    </div>
  );
}
