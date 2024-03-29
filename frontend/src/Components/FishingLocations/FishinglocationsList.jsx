import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import { getFishingLocations } from "../../Utilities/Regions/helpers";
import { BaseUrlPicture } from "../../Utilities/Regions/URL";
import { Dna } from "react-loader-spinner";
import css from "./FishingLocationsList.module.css";
import lastImage from "../../Utilities/Images/common/how_to_surf_fish.jpg";
export const FishingLocationsList = () => {
  const { locPath } = useParams();
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(3);

  useEffect(() => {
    setLoading(true);
    getFishingLocations({ locPath, page, perPage })
      .then(setLocation)
      .finally(setLoading(false));
  }, [locPath, page, perPage]);
  const shoudLoadingButton =
    location.length > 0 && location.length >= perPage && !loading;

  const shouldBackButton = page !== 1 && !loading;

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };

  const backLoad = () => {
    setPage((prevPage) => prevPage - 1);
  };

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
        {location.length > 0 && (
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
        )}
        {location.length === 0 && (
          <>
            <h1 className={css.endTitle}>
              Oops! There is no more locations in this region!
            </h1>
            <img src={lastImage} alt={lastImage} />
          </>
        )}
        <ButtonContainer>
          {shouldBackButton && (
            <button className={css.button} onClick={backLoad}>
              Load Prev
            </button>
          )}
          {shoudLoadingButton && (
            <button className={css.button} onClick={loadMore}>
              Load Next
            </button>
          )}
        </ButtonContainer>
        <Outlet />
      </div>
    </div>
  );
};
//
