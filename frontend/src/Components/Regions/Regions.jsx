import { Link, useLocation } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import css from "./Regions.module.css";

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
      {regions.map(({ _id, name, locPath }) => (
        <Link
          key={_id}
          to={`/region/${locPath}`}
          state={{ from: location }}
          className={css.link}
        >
          <li className={css.regionsItem}>{name}</li>
        </Link>
      ))}
    </ul>
  );
};
