import { Link, useLocation } from "react-router-dom";

export const Regions = ({ regions }) => {
  const location = useLocation();
  console.log(regions);
  return (
    <ul>
      {regions.map(({ _id, name, path }) => (
        <Link key={_id} to={`/regions/${path}`} state={{ from: location }}>
          {name}
        </Link>
      ))}
    </ul>
  );
};
