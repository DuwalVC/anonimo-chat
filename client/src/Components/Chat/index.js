import React, { useEffect, useState } from "react";
import {
  StyledContainer,
  StyledHeader,
  StyledBody,
  StyleFooter,
  StyleMessage,
} from "./styled";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat(props) {
  const [userValue, setUserValue] = useState("anonimo");
  const [messageValue, setMessageValue] = useState("");

  console.log(userValue);
  console.log(messageValue);

  const pushEnter = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      props.socket.emit("chatGeneral", {
        user: userValue,
        message: messageValue,
      });
      setMessageValue("");
    }
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <p>Nombre de Chat</p>
      </StyledHeader>
      <ScrollToBottom className="scrollChat">
        {props.listChatValue.map((obj, index) => {
          return (
            <StyleMessage key={index}>
              {obj.user}: {obj.message}
            </StyleMessage>
          );
        })}
      </ScrollToBottom>
      <StyleFooter>
        {/* input chat */}
        <input
          placeholder="Nombre"
          value={userValue}
          onChange={(event) => {
            setUserValue(event.target.value);
          }}
        />
        <input
          placeholder="Envia mensaje"
          value={messageValue}
          onChange={(event) => {
            setMessageValue(event.target.value);
          }}
          onKeyUp={pushEnter}
        ></input>
      </StyleFooter>
    </StyledContainer>
  );
}

export default Chat;
