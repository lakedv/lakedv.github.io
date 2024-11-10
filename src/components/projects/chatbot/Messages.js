import React, { useRef, useEffect } from "react";

export default function Messages(props) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.messages]);

  return (
    <div className="chatbox offset-2 col-8 p-2 border border-rounded rounded-3 bg-light overflow-auto">
      <div className="m-1">
        {props.messages.map((message, index) => {
          const isBotMessage = message.startsWith("GerBot:");
          return (
            <div className="container" key={index}>
              <div className={`row d-flex ${isBotMessage ? "justify-content-start" : "justify-content-end"}`}>
                <div
                  className={`col-auto m-1 p-2 alert ${
                    isBotMessage ? "alert-success text-white" : "alert-primary text-white"
                  }`}
                  style={{
                    maxWidth: "50%",
                    textAlign: isBotMessage ? "right" : "left",
                  }}
                >
                  {message}
                </div>
              </div>
              <div ref={messagesEndRef} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
