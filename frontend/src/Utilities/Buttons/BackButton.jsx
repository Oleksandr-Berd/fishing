import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import * as SC from "./Button.styled";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <SC.ButtonBackStyled
      onClick={() => {
        navigate(-1);
      }}
    >
      <span style={{ marginRight: "5px" }}>Go back</span>
      <ArrowUturnLeftIcon width={18} />
    </SC.ButtonBackStyled>
  );
};
