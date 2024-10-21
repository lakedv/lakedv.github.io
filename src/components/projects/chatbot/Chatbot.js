import { useState } from "react";

export default function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userMessage.trim()) return;

    const msj = {
      text: userMessage,
      user: "human",
    };

    setChat((prevChat) => [...prevChat, msj]);
    setUserMessage("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">LakeBot</h1>
        <div className="chat-window">
          <div className="conversation-view">
            {chat.map((msj, index) => (
              <div key={index}>
                {msj.user}: {msj.text}
              </div>
            ))}
          </div>
          <div className="message-box">
            <form className="form-control" onSubmit={handleSubmit}>
              <input
                value={userMessage}
                onChange={handleChange}
                className="text-input"
                type="text"
                autoFocus
                placeholder="Press enter to chat"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
