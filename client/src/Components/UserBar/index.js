import React from "react";
import SearchChat from "../SearchChat";
// import Profile from "../Profile";
import {
  StyledUserBar,
  StyledButton,
  StyledBarObjects,
  StyledChats,
} from "./styled";

import Plus from "../../assets/images/plus.svg";
import User from "../User";

function UserBar(props) {
  return (
    <StyledUserBar>
      <SearchChat />
      <StyledBarObjects>
        <StyledButton>USUARIOS EXISTENTES</StyledButton>
        {/* <StyledButton onClick={props.showCreateGroup}>
          CREAR CHAT GRUPAL
          <img src={Plus} />
        </StyledButton> */}
        <StyledChats>
          <User />
          <User />
          <User />
          <User />
        </StyledChats>
      </StyledBarObjects>
      {/* <Profile /> */}
    </StyledUserBar>
  );
}

export default UserBar;
