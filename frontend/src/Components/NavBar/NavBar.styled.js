import styled from "styled-components";

export const NavLinkStyled = styled.span`
  color: #000000;
  font-size: 30px;
  margin-right: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: lightblue;
  }
`;
