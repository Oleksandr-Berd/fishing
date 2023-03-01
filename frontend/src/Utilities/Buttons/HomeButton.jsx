import { HomeIcon } from "@heroicons/react/24/solid";
import * as SC from "./Button.styled";
import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <SC.ButtonHomeStyled>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span style={{ marginRight: "5px" }}>Go home</span>
        <HomeIcon width={18} />
      </Link>
    </SC.ButtonHomeStyled>
  );
};
