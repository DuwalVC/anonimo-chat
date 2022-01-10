import styled from "styled-components";

const StyledChat = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 6px;
  border-radius: 5px;
  background: none;
  color: white;

  &:hover {
    background: #32353a;
  }

  & img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
  & label {
    width: calc(100% - 32px);
    text-align: start;
    padding-left: 10px;
  }
`;

export { StyledChat };
