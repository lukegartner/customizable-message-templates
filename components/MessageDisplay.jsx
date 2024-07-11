const MessageDisplay = ({ message }) => {
  return (
    <div className="mt-6 mx-2">
      <h1>Message Output:</h1>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default MessageDisplay;
