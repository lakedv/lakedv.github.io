import React, {useRef, useEffect } from "react";

export default function Messages(props) {
  const messagesEndRef = useRef(null)

  useEffect(() =>{
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  }, [props.messages])

  return (
    <div className="chatbox offset-2 col-8 p-2 border border-rounded rounded-3 bg-light overflow-auto">
      <div className="m-1">
        {props.messages.map((message, index) => (
          <div className="container" key={index}>
            <div className="row">
              <div className="col-6 m-1 alert-info border rounded-pill">
                {message}
              </div>
              <div ref={messagesEndRef}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}