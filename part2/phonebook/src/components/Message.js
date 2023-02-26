import React from "react";

const Message = ({ message }) => {
  let messageStyle = {
    color: "green",
    border: "4px solid green",
    background: "#c6cdc6",
    borderRadius: "16px",
    padding: "16px",
    fontSize: "25px",
    marginBottom: "24px",
  };
  if (message.includes("removed")) {
    const errorMessage = { ...messageStyle, color: "red", borderColor: "red" };
    messageStyle = errorMessage;
  }

  if (message) {
    return <div style={messageStyle}>{message}</div>;
  }
};

export default Message;
