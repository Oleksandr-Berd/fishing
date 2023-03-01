import styled from "styled-components";

export const ButtonBackStyled = styled.button`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border: solid whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: solid whitesmoke;
  :focus,
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

export const ButtonHomeStyled = styled.button`
  text-decoration: none;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  background-color: #000;
  border: solid whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: solid whitesmoke;
  :focus,
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
