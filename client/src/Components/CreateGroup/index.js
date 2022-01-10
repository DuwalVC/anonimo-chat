import React from "react";
import User from "../User";
import {
  StyledContainer,
  StyledModal,
  StyledTitulo,
  StyledList,
  StyledBtnCreate,
} from "./styled";

function CreateGroup(props) {
  return (
    <StyledContainer onClick={props.hideCreateGroup}>
      <StyledModal onClick={props.hideCreateGroup2}>
        <StyledTitulo>Seleccionar amigos</StyledTitulo>
        <StyledList>
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </StyledList>
        <StyledBtnCreate>Crear grupo</StyledBtnCreate>
      </StyledModal>
    </StyledContainer>
  );
}

export default CreateGroup;
