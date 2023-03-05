import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import { getFishingLocations } from "../../Utilities/Regions/helpers";
import { BaseUrlPicture } from "../../Utilities/Regions/URL";
import * as SC from "./FishingLocation.styled";

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
      <SC.ContainerFishingLocation>
        <SC.FishingLocationList>
          {location !== null &&
            location.map(({ title, adress, picture, fishes, _id }) => (
              <SC.ContainerFishingLocationCard key={_id}>
                <Link to={_id} key={_id}>
                  <SC.TitleFishingLocationList>
                    {title}
                  </SC.TitleFishingLocationList>
                </Link>
                <p style={{ color: "black" }}>{adress}</p>
                <img
                  src={`${BaseUrlPicture}/${picture[0]}`}
                  alt={title}
                  width={270}
                />
                <SC.LocationFishesList>
                  {fishes.map((el) => (
                    <SC.ItemFishesListStyled key={el}>
                      {el}
                    </SC.ItemFishesListStyled>
                  ))}
                </SC.LocationFishesList>
              </SC.ContainerFishingLocationCard>
            ))}
        </SC.FishingLocationList>
        <Outlet />
      </SC.ContainerFishingLocation>
    </div>
  );
};
//
