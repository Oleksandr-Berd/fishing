import { Link, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import css from "./Regions.module.css";
import { BaseUrlPicture } from "../../Utilities/Regions/URL";

export const Regions = ({ regions, loading }) => {
  const location = useLocation();

  return (
    <ul className={css.regionsList}>
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
      {regions.map(({ _id, name, locPath, image }) => (
        <div key={_id}>
          <Link
            key={_id}
            to={`/region/${locPath}`}
            state={{ from: location }}
            className={css.link}
          >
            <h1 className={css.regionsItem}> {name}</h1>
          </Link>
          <img src={`${BaseUrlPicture}/${image[0]}`} alt="" />
        </div>
      ))}
    </ul>
  );
};
