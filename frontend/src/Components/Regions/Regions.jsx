import { Link, useLocation } from "react-router-dom";
import * as SC from "./Regions.styled";

export const Regions = ({ regions }) => {
  const location = useLocation();
  return (
    <SC.RegionListStyled>
      {regions.map(({ _id, name, path }) => (
        <Link key={_id} to={`/region/${path}`} state={{ from: location }}>
          <SC.RegionItemStyled>{name}</SC.RegionItemStyled>
        </Link>
      ))}
    </SC.RegionListStyled>
  );
};
