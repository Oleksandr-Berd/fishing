import { useState, useEffect } from "react";
import { Regions } from "../Regions/Regions";
import { Outlet } from "react-router-dom";
import { getRegions } from "../../Utilities/Regions/helpers";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import css from "./RegionList.module.css";

export const RegionList = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRegions().then(setRegions).finally(setLoading(false));
  }, []);
  return (
    <>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <div className={css.container}>
        <Regions regions={regions} loading={loading} />
        <Outlet />
      </div>
    </>
  );
};
