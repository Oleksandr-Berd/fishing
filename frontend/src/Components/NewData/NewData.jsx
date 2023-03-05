import { useState } from "react";
const _debounce = require("lodash");

export const NewData = ({ submit }) => {
  const [title, setTitle] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [adress, setAdress] = useState("");
  const [fish, setFish] = useState("");
  const [fishes, setFishes] = useState([]);
  const [fishingConditions, setFishingConditions] = useState("");
  const [description, setDescription] = useState("");
  const [allowedTime, setAllowedTime] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();

    setFishes([...fishes, fish.split(",")]);

    setCoordinates({ longitude, latitude });
    submit({
      title,
      coordinates,
      adress,
      fishes,
      fishingConditions,
      description,
      allowedTime,
    });
  };
  return (
    <div>
      <form
        method="post"
        id="form"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        {/* <input type="file" name="image" multiple /> */}

        <input
          type="text"
          name="title"
          onChange={(evt) => {
            setTitle(evt.currentTarget.value);
          }}
          value={title}
          required
        />
        <input
          type="number"
          name="longitude"
          onChange={(evt) => {
            setLongitude(evt.currentTarget.value);
          }}
          value={longitude}
          placeholder="please enter the longitude"
          required
        />
        <input
          type="number"
          name="latitude"
          onChange={(evt) => {
            setLatitude(evt.currentTarget.value);
          }}
          value={latitude}
          placeholder="please enter the latitude"
          required
        />
        <input
          type="text"
          name="adress"
          onChange={(evt) => {
            setAdress(evt.currentTarget.value);
          }}
          value={adress}
          required
        />
        <input
          type="text"
          name="fish"
          onChange={(evt) => {
            setFish(evt.currentTarget.value);
          }}
          value={fish}
          placeholder="e.g., fish"
          required
        />
        <input
          type="text"
          name="fishingConditions"
          onChange={(evt) => {
            setFishingConditions(evt.currentTarget.value);
          }}
          value={fishingConditions}
          required
        />
        <input
          type="text"
          name="description"
          onChange={(evt) => {
            setDescription(evt.currentTarget.value);
          }}
          value={description}
          required
        />
        <input
          type="text"
          name="allowedTime"
          onChange={(evt) => {
            setAllowedTime(evt.currentTarget.value);
          }}
          value={allowedTime}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
