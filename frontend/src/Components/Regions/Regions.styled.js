import styled from "styled-components";

export const RegionItemStyled = styled.li`
  display: inline-block;
  border-radius: 8px;
  padding: 8px;
  font-size: 24px;
  margin-bottom: 16px;
  text-decoration: none;
  font-style: italic;
  font-weight: bold;
  color: #000000;
  font-family: "Shantell Sans";
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  :hover,
  :focus {
    background: #89cff0;
  }
`;

export const RegionListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;
