import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { getFishingLocations } from "../../Utilities/Regions/getRegions";
import * as SC from "../RegionList/RegionList.styled";

export const FishingLocationsList = () => {
  const { path } = useParams();
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getFishingLocations(path).then(setLocation);
  }, [path]);

  return (
    <div>
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
      <ul>
        {location !== null &&
          location.map(({ title, adress, picture, fishes, _id }) => (
            <Link to={_id} id={_id}>
              <h1>{title}</h1>
              <p>{adress}</p>
              <img src={picture} alt={title} />
              <ul>
                {fishes.map((el) => (
                  <li id={el}>{el}</li>
                ))}
              </ul>
            </Link>
          ))}
      </ul>
      <Outlet />
    </div>
  );
};
//
