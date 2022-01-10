// import logo from './logo.svg';
// import "./App.css";
import React, { useEffect, useState } from "react";
import UserBar from "../UserBar";
import Chat from "../Chat";
import Friends from "../Friends";
import CreateGroup from "../CreateGroup";
import { StyledApp, StyledGlobal } from "./styled";
import io from "socket.io-client";
const socket = io.connect("//localhost:3001");

function App() {
  const [listChatValue, setListChatValue] = useState([]);
  const [chatValue, setChatValue] = useState(true);
  const [friendsValue, setFriendsValue] = useState(false);
  const [createGroup, setCreateGroup] = useState(false);

  useEffect(() => {
    socket.on("chatGeneral", (data) => {
      listChatValue.push(data);
      console.log(data);
    });
  }, []);

  //listen
  const [listenValue, setListenValue] = useState(true);

  useEffect(() => {
    const time = setInterval(() => {
      console.log("refresh");
      setListenValue(!listenValue);
    }, 500);
    return () => {
      clearInterval(time);
    };
  });
  //..

  const showCreateGroup = () => {
    setCreateGroup(true);
  };
  const hideCreateGroup = () => {
    setCreateGroup(false);
  };

  return (
    <>
      <StyledGlobal />
      <StyledApp>
        <UserBar showCreateGroup={showCreateGroup} />
        {chatValue ? (
          <Chat listChatValue={listChatValue} socket={socket} />
        ) : null}
        {friendsValue ? <Friends /> : null}
        {createGroup ? <CreateGroup hideCreateGroup={hideCreateGroup} /> : null}
      </StyledApp>
    </>
  );
}

export default App;
