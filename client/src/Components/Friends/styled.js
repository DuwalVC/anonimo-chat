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
  height: calc(100% - 48px);
  padding: 0px 20px;
  padding-top: 20px;
  box-sizing: border-box;

  overflow: auto;
`;

export { StyledContainer, StyledHeader, StyledBody };
