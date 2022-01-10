import styled from "styled-components";

const StyledProfile = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  background: #252629;
`;

const StyledButton = styled.button`
  background: none;
  height: 32px;
  width: 32px;
  border-radius: 5px;
  &:hover {
    background: #32353a;
  }
  &img {
    height: 100%;
    width: 100%;
  }
`;

const StyledInput = styled.input`
  border-radius: 5px;
  background: ${(props) => (props.disabled ? "none" : "white")};
  color: ${(props) => (props.disabled ? "white" : "black")};
  font-weight: 700;
`;

export { StyledProfile, StyledButton, StyledInput };
