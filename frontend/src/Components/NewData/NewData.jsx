import { useState } from "react";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";

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
  const [path, setPath] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();

    setFishes([...fishes, fish.split(",")]);

    setCoordinates({ longitude, latitude });
    submit(
      {
        title,
        coordinates,
        adress,
        fishes,
        fishingConditions,
        description,
        allowedTime,
      },
      path
    );
  };
  return (
    <div>
      <ButtonContainer>
        <BackButton />
        <HomeButton />
      </ButtonContainer>
      <form
        method="post"
        id="form"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        {/* <input type="file" name="image" multiple /> */}
        <label htmlFor="fav">Choose your region</label>
        <input
          list="regions"
          name="region"
          id="region"
          onChange={(evt) => setPath(evt.currentTarget.value)}
        />
        <datalist id="regions">
          <option value="locKyiv">Kyiv region</option>
          <option>Odesa region</option>
          <option>Dnipro region</option>
          <option>Chernihiv region</option>
          <option>Kharkiv region</option>
        </datalist>
        <input
          type="text"
          name="title"
          onChange={(evt) => {
            setTitle(evt.currentTarget.value);
          }}
          value={title}
          placeholder="please enter the title"
        />
        <input
          type="number"
          name="latitude"
          onChange={(evt) => {
            setLatitude(evt.currentTarget.value);
          }}
          value={latitude}
          placeholder="please enter the latitude"
        />
        <input
          type="number"
          name="longitude"
          onChange={(evt) => {
            setLongitude(evt.currentTarget.value);
          }}
          value={longitude}
          placeholder="please enter the longitude"
        />
        <input
          type="text"
          name="adress"
          onChange={(evt) => {
            setAdress(evt.currentTarget.value);
          }}
          value={adress}
          placeholder="please enter the adress"
        />
        <input
          type="text"
          name="fish"
          onChange={(evt) => {
            setFish(evt.currentTarget.value);
          }}
          value={fish}
          placeholder="e.g., fish"
        />
        <input
          type="text"
          name="fishingConditions"
          onChange={(evt) => {
            setFishingConditions(evt.currentTarget.value);
          }}
          value={fishingConditions}
          placeholder="please enter the fishingConditions"
        />
        <input
          type="text"
          name="description"
          onChange={(evt) => {
            setDescription(evt.currentTarget.value);
          }}
          value={description}
          placeholder="please enter the description"
        />
        <input
          type="text"
          name="allowedTime"
          onChange={(evt) => {
            setAllowedTime(evt.currentTarget.value);
          }}
          value={allowedTime}
          placeholder="please enter the allowedTime"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
