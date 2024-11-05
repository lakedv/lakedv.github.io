export default function Messages(props) {

  return (
    <div className="chatbox col-5 p-2 border border-rounded rounded-3 bg-light">
      <div className="m-1">
        {props.messages.map((message, index) => (
          <div className="container" key={index}>
            <div className="row">
              <div className="m-1 alert-info border rounded-pill">
                {message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}