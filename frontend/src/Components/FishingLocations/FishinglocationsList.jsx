import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import { getFishingLocations } from "../../Utilities/Regions/helpers";
import { BaseUrlPicture } from "../../Utilities/Regions/URL";
import { postNewImage } from "../../Utilities/Regions/helpers";
import * as SC from "./FishingLocation.styled";

export const FishingLocationsList = () => {
  const { locPath } = useParams();
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    getFishingLocations(locPath).then(setLocation);
  }, [locPath]);

  const submitImage = (evt) => {
    evt.preventDefault();
    const data = new FormData();
    data.append("image", image[0]);
    console.log(data);
    // postNewImage(data, locPath);
  };
  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <form encType="multipart/form-data" onSubmit={submitImage}>
        <input
          type="file"
          name="image"
          onChange={(evt) => setImage(evt.target.files)}
        />
        <button type="submit">Attach the image</button>
      </form>
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
