import { useState, useEffect } from "react";
import { Regions } from "../Regions/Regions";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { getRegions } from "../../Utilities/Regions/getRegions";
import * as SC from "./RegionList.styled.js";

export const RegionList = () => {
  const [regions, setRegions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRegions().then(setRegions);
  }, []);

  return (
    <SC.RegionListStyled>
      <SC.ButtonsContainerStyled>
        <SC.ButtonBackStyled
          onClick={() => {
            navigate(-1);
          }}
        >
          <span>Go back</span>
        </SC.ButtonBackStyled>
        <SC.ButtonHomeStyled>
          <Link to="/">
            <span style={{ textDecoration: "none" }}>Go home</span>
          </Link>
        </SC.ButtonHomeStyled>
      </SC.ButtonsContainerStyled>
      <Regions regions={regions} />
      <Outlet />
    </SC.RegionListStyled>
  );
};
