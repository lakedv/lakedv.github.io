export default function Messages(props) {
  const messages = props.messages;

  return (
    <div className="col-5 p-2 border border-rounded rounded-3 bg-light">
      <div className="m-1">
        {messages.map((message, index) => (
          <div className="container" key={index}>
            <div className="row">
              <div className="m-1 alert-info border rounded-pill">
                {message.user}: {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
