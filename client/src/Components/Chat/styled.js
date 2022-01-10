import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: calc(100% - 240px);
`;
const StyledHeader = styled.span`
  display: flex;
  background-color: #2f3237;
  height: 48px;
  width: 100%;
  border-bottom: 1px solid #2a2d31;
  box-sizing: border-box;
  padding: 0px 20px;
  align-items: center;
  font-weight: 800;
`;
const StyledBody = styled.div`
  background: #2f3237;
  height: calc(100% - 120px);
  padding: 0px 20px;
  overflow: auto;
`;
const StyleMessage = styled.p`
  padding: 20px 0px;
`;
const StyleFooter = styled.div`
  background: #2f3237;
  height: 72px;
  padding: 0px 20px;
  display: flex;

  & input {
    height: 44px;
    width: 100%;
    border-radius: 10px;
    background: #383c42;
    padding: 0px 20px;
    box-sizing: border-box;

    &:first-child {
      width: 100px;
      margin-right: 10px;
    }

    &:focus-visible {
      outline: none;
    }
  }
`;

export { StyledContainer, StyledHeader, StyledBody, StyleFooter, StyleMessage };
