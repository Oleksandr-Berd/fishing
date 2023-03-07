import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import { getFishingLocations } from "../../Utilities/Regions/helpers";
import { BaseUrlPicture } from "../../Utilities/Regions/URL";
import { postNewImage } from "../../Utilities/Regions/helpers";
import { toast } from "react-toastify";
import css from "./FishingLocationsList.module.css";

export const FishingLocationsList = () => {
  const { locPath } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getFishingLocations(locPath).then(setLocation);
  }, [locPath]);

  const submitImage = (evt) => {
    evt.preventDefault();
    const data = new FormData();
    data.append("image", evt.target.image.files[0]);
    console.log(data);
    postNewImage(data, locPath);
    return toast.success("The image is added");
  };
  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <form onSubmit={submitImage}>
        <input type="file" name="image" />
        <button type="submit">Attach the image</button>
      </form>
      <div className={css.container}>
        <ul className={css.gridContainer}>
          {location !== null &&
            location.map(({ title, adress, picture, fishes, _id }) => (
              <div key={_id}>
                <Link to={_id} key={_id}>
                  <h1 className={css.locationTitle}>{title}</h1>
                </Link>
                <p style={{ color: "black" }}>{adress}</p>
                <img
                  className={css.locationPicture}
                  src={`${BaseUrlPicture}/${picture[0]}`}
                  alt={title}
                />
                <ul className={css.fishList}>
                  {fishes.map((el) => (
                    <li key={el} className={css.fishItem}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
//
