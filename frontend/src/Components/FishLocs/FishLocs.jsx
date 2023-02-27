import { useState, useEffect } from "react";
import { Regions } from "../Regions/Regions";
import { Outlet } from "react-router-dom";
import { getRegions } from "../../Utilities/Regions/getRegions";

export const FishLocs = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    getRegions().then(setRegions);
  }, []);

  return (
    <div>
      <Regions regions={regions} />
      <Outlet />
    </div>
  );
};
