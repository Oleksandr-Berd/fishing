import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import { getFishingLocations } from "../../Utilities/Regions/getRegions";
import * as SC from "./FishingLocation.styled";
import { URL } from "../../Utilities/Regions/URL";

export const FishingLocationsList = () => {
  const { path } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getFishingLocations(path).then(setLocation);
  }, [path]);

  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <SC.FishingLocationList>
        {location !== null &&
          location.map(({ title, adress, picture, fishes, _id }) => (
            <Link to={_id} key={_id}>
              <h1>{title}</h1>
              <p>{adress}</p>
              <img src={`${URL}/${picture[0]}`} alt={title} />
              <SC.LocationFishesList>
                {fishes.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </SC.LocationFishesList>
            </Link>
          ))}
      </SC.FishingLocationList>
      <Outlet />
    </div>
  );
};
//
