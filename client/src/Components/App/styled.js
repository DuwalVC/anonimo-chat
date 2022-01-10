import styled, { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
    color: white;
  }

  .scrollChat{
    background: #2f3237;
  height: calc(100% - 120px);
  padding: 0px 20px;
  overflow: auto;
  }


::-webkit-scrollbar {
  width: 8px;
  height: 6px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #1d1f21;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #1d1f21;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #2f3237;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #2f3237;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;

const StyledApp = styled.div`
  background: #1d1f21;
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
`;

export { StyledApp, StyledGlobal };
