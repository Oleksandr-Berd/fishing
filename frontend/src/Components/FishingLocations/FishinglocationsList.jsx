import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import { getFishingLocations } from "../../Utilities/Regions/helpers";
import { BaseUrlPicture } from "../../Utilities/Regions/URL";
import { Dna } from "react-loader-spinner";
import css from "./FishingLocationsList.module.css";

export const FishingLocationsList = () => {
  const { locPath } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFishingLocations(locPath).then(setLocation).finally(setLoading(false));
  }, [locPath]);

  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      {loading && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <div className={css.container}>
        <ul className={css.gridContainer}>
          {location !== null &&
            location.map(({ title, adress, picture, fishes, _id }) => (
              <div key={_id} className={css.item}>
                <img
                  className={css.locationPicture}
                  src={`${BaseUrlPicture}/${picture[0]}`}
                  alt={title}
                />
                <Link to={_id} key={_id} className={css.locationItem}>
                  <h1 className={css.locationTitle}>{title}</h1>
                </Link>
                <h3 className={css.adress}>{adress}</h3>
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
