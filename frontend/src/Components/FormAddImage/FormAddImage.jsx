import { patchNewImage, postNewImage } from "../../Utilities/Regions/helpers";

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
    <form onSubmit={handleImageSubmit}>
      <input type="file" name="image" />
      <button type="submit">Upload</button>
    </form>
  );
};
