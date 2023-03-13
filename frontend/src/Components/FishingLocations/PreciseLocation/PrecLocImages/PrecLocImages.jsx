import { useState } from "react";
import { BaseUrlPicture } from "../../../../Utilities/Regions/URL";
import { Modal } from "../../../Regions/Modal/Modal";
import css from "./PrecLocImages.module.css";

export const PrecLocImages = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (evt) => setShowModal(!showModal);

  return (
    <li key={image} className={css.imageItem}>
      <img
        src={`${BaseUrlPicture}/${image}`}
        alt={image}
        className={css.image}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal} imageUrl={image} title={image} />
      )}
    </li>
  );
};
