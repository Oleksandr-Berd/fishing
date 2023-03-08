import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import css from "./Home.module.css";

export const Home = () => {
  return (
    <div className={css.container}>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <p>This is a Home page</p>
    </div>
  );
};
