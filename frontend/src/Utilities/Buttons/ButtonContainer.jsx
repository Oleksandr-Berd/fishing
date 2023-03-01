import { Outlet } from "react-router-dom";
import * as SC from "./Button.styled";

export const ButtonContainer = ({ children }) => {
  return (
    <SC.ButtonsContainerStyled>
      {children}
      <Outlet />
    </SC.ButtonsContainerStyled>
  );
};
