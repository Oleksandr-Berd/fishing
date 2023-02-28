import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLocById } from "../../../Utilities/Regions/getRegions";

export const PreciseLocation = () => {
  const { _id, path } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocById(_id, path).then(setLocation);
  }, [_id, path]);
  return <p>Precise location{location !== null && location.title}</p>;
};
