import { useState, useEffect } from "react";
import { Regions } from "../Regions/Regions";
import { Outlet } from "react-router-dom";
import { getRegions } from "../../Utilities/Regions/helpers";
import * as SC from "./RegionList.styled.js";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import { backgroundImageOne } from "../../Utilities/Common/images";

export const RegionList = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    getRegions().then(setRegions);
  }, []);

  return (
    <SC.RegionListStyled imgUrl={backgroundImageOne}>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <Regions regions={regions} />
      <Outlet />
    </SC.RegionListStyled>
  );
};
