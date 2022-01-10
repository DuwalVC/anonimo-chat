import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  width: 440px;
  background: #2f3237;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const StyledTitulo = styled.p`
  padding: 20px 0px;
  font-weight: 800;
  font-size: 20px;
`;
const StyledList = styled.div`
  height: 200px;
  width: 100%;
  overflow: auto;
  margin-bottom: 20px;
`;

const StyledBtnCreate = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #4d5feb;
  font-weight: 800;
  margin-bottom: 20px;
`;

export {
  StyledContainer,
  StyledModal,
  StyledTitulo,
  StyledList,
  StyledBtnCreate,
};
