import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../../Utilities/Buttons/HomeButton";
import { getLocById } from "../../../Utilities/Regions/getRegions";
import { BaseUrlPicture } from "../../../Utilities/Regions/URL";
import * as SC from "../FishingLocation.styled";

export const PreciseLocation = () => {
  const { _id, path } = useParams();
  const [location, setLocation] = useState("");

  useEffect(() => {
    getLocById(_id, path).then(setLocation);
  }, [_id, path]);

  const {
    title,
    adress,
    fishes,
    description,
    coordinates,
    allowed_time,
    fishing_conditions,
    picture,
  } = location;

  return (
    <SC.ContainerPreciseLocation>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <SC.ContainerMapPreciseLocation>
        <SC.ContainerTextPreciseLocation>
          <h1>{location !== null && title}</h1>
          <p>Adress: {adress}</p>
          <p>{description}</p>
          <p>Fishing conditions: {fishing_conditions}</p>
          <p>Allowed time for fishing: {allowed_time}</p>
          <SC.ListFishPreciseLocation>
            <span>Type of fish:</span>
            {fishes &&
              fishes.map((fish) => (
                <SC.ItemFishPreciseLocation key={fish}>
                  {fish}
                </SC.ItemFishPreciseLocation>
              ))}
          </SC.ListFishPreciseLocation>
        </SC.ContainerTextPreciseLocation>
        {coordinates && (
          <iframe
            title={title}
            src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20280.311450652876!2d${coordinates.longitude}!3d${coordinates.latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1677849338306!5m2!1suk!2sua`}
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        )}
      </SC.ContainerMapPreciseLocation>
      <SC.ContainerPicturesPreciseLocation>
        <SC.ListPicturesPreciseLocation>
          {picture &&
            picture.map((el) => (
              <SC.ItemPicturePreciseLocation key={el}>
                <img
                  src={`${BaseUrlPicture}/${el}`}
                  alt={el}
                  width={160}
                  height={100}
                />
              </SC.ItemPicturePreciseLocation>
            ))}
        </SC.ListPicturesPreciseLocation>
      </SC.ContainerPicturesPreciseLocation>
    </SC.ContainerPreciseLocation>
  );
};
