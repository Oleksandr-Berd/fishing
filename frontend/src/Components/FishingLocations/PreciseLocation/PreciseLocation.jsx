import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../../Utilities/Buttons/HomeButton";
import { getLocById } from "../../../Utilities/Regions/getRegions";

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
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <h1>{location !== null && title}</h1>
      <p>Adress: {adress}</p>
      <p>{description}</p>
      <p>Fishing conditions: {fishing_conditions}</p>
      <p>Allowed time for fishing: {allowed_time}</p>
    </div>
  );
};
