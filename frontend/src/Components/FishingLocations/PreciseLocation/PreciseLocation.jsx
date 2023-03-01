import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../../Utilities/Buttons/HomeButton";
import { getLocById } from "../../../Utilities/Regions/getRegions";

export const PreciseLocation = () => {
  const { _id, path } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocById(_id, path).then(setLocation);
  }, [_id, path]);
  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <p>Precise location{location !== null && location.title}</p>
    </div>
  );
};
