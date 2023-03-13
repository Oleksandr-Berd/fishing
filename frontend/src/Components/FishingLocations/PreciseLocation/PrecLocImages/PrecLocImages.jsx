import { BaseUrlPicture } from "../../../../Utilities/Regions/URL";
import css from "./PrecLocImages.module.css";

export const PrecLocImages = ({ image }) => {
  return (
    <li key={image} className={css.imageItem}>
      <img
        src={`${BaseUrlPicture}/${image}`}
        alt={image}
        className={css.image}
      />
    </li>
  );
};
