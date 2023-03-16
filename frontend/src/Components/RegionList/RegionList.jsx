import { useState, useEffect } from "react";
import { Regions } from "../Regions/Regions";
import { Outlet } from "react-router-dom";
import { getRegions } from "../../Utilities/Regions/helpers";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import css from "./RegionList.module.css";
import { Dna } from "react-loader-spinner";

export const RegionList = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getRegions({ page }).then(setRegions).finally(setLoading(false));
  }, [page]);

  const shoudlLoadingButton = regions.length > 0 && !loading;

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };

  return (
    <>
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
      <ul className={css.container}>
        {regions
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ _id, name, locPath, image }) => (
            <Regions
              key={_id}
              id={_id}
              name={name}
              locPath={locPath}
              image={image}
            />
          ))}
        {shoudlLoadingButton && <button onClick={loadMore}>Load More</button>}
        <Outlet />
      </ul>
    </>
  );
};
