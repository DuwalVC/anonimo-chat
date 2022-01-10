import styled from "styled-components";

const StyledUserBar = styled.div`
  background: #2a2b2f;
  height: 100vh;
  width: 240px;
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled.button`
  background: none;
  width: 100%;
  color: #83878c;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background: #34373c;
  }
`;
const StyledBarObjects = styled.div`
  height: calc(100% - 100px);
  padding: 10px;
  box-sizing: border-box;
`;

const StyledChats = styled.div`
  width: 100%;
`;

export { StyledUserBar, StyledButton, StyledBarObjects, StyledChats };
