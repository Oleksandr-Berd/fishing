import * as SC from "./Home.styled";
import { backgroundImageOne } from "../../Utilities/Common/images";

export const Home = () => {
  return (
    <SC.HomeStyled imgUrl={backgroundImageOne}>
      <p>This is a Home page</p>
    </SC.HomeStyled>
  );
};
