import { patchNewImage, postNewImage } from "../../Utilities/Regions/helpers";
import css from "./FormAddImage.module.css";

export const FormAddImage = ({ locPath, id }) => {
  const handleImageSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();

    formData.append("image", evt.target.image.files[0]);

    postNewImage(formData, locPath).finally(
      patchNewImage(formData, locPath, id)
    );
  };

  return (
    <form className={css.form} onSubmit={handleImageSubmit}>
      <input className={css.input} type="file" name="image" />
      <button className={css.btn} type="submit">
        Upload
      </button>
    </form>
  );
};
