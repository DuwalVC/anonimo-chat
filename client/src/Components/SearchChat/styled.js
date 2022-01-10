import styled from "styled-components";

const StyledSearchChat = styled.div`
  height: 48px;
  width: 100%;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #202123;
  display: flex;
  align-items: center;

  & input {
    width: 100%;
    height: 28px;
    background: #1d1f21;
    border-radius: 5px;
    padding: 0px 6px;
    color: #83878c;

    &:focus-visible {
      outline: none;
    }
  }
`;

export { StyledSearchChat };
