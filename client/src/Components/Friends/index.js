import React from "react";
import User from "../User";
import { StyledContainer, StyledHeader, StyledBody } from "./styled";

function Friends() {
  return (
    <StyledContainer>
      <StyledHeader>
        <p>Usuarios existentes</p>
      </StyledHeader>
      <StyledBody>
        <User />
        <User />
        <User />
        <User />
        <User />
      </StyledBody>
    </StyledContainer>
  );
}

export default Friends;
