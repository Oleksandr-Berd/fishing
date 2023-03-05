import { useState } from "react";
import { BackButton } from "../../Utilities/Buttons/BackButton";
import { ButtonContainer } from "../../Utilities/Buttons/ButtonContainer";
import { HomeButton } from "../../Utilities/Buttons/HomeButton";
import * as SC from "./NewData.styled";

export const NewData = ({ submit }) => {
  const [title, setTitle] = useState("");
  const [{ latitude, longitude }, setCoordinates] = useState({});
  const [adress, setAdress] = useState("");
  const [fishes, setFishes] = useState([]);
  const [fishingConditions, setFishingConditions] = useState("");
  const [description, setDescription] = useState("");
  const [allowedTime, setAllowedTime] = useState("");
  const [path, setPath] = useState("");
  const coordinates = { latitude, longitude };
  const submitHandler = (evt) => {
    evt.preventDefault();
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
      <SC.FormContainer
        method="post"
        id="form"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        {/* <input type="file" name="image" multiple /> */}
        <SC.LabelAddNewData htmlFor="region">
          Choose your region
        </SC.LabelAddNewData>
        <SC.InputAddNewData
          list="regions"
          name="region"
          id="region"
          onChange={(evt) => {
            setPath(evt.currentTarget.value);
          }}
        />
        <datalist id="regions">
          <option value="locKyiv">Kyiv region</option>
          <option>Odesa region</option>
          <option>Dnipro region</option>
          <option>Chernihiv region</option>
          <option>Kharkiv region</option>
        </datalist>
        <SC.LabelAddNewData htmlFor="title">Enter the title</SC.LabelAddNewData>
        <SC.InputAddNewData
          type="text"
          name="title"
          onChange={(evt) => {
            setTitle(evt.currentTarget.value);
          }}
          value={title}
          placeholder="e.g. New Title"
          id="title"
        />
        <SC.LabelAddNewData>Enter the coordinates</SC.LabelAddNewData>
        <SC.InputAddNewData
          name="latitude"
          onChange={(evt) => {
            setCoordinates({ latitude: evt.currentTarget.value });
          }}
          placeholder="latitude e.g. 50.50505"
        />
        <SC.InputAddNewData
          name="longitude"
          onChange={(evt) => {
            setCoordinates({ latitude, longitude: evt.currentTarget.value });
          }}
          placeholder="longitude e.g. 30.30303"
        />
        <SC.LabelAddNewData htmlFor="adress">
          Enter the adress
        </SC.LabelAddNewData>
        <SC.InputAddNewData
          type="text"
          name="adress"
          onChange={(evt) => {
            setAdress(evt.currentTarget.value);
          }}
          value={adress}
          placeholder="e.g. Road to Heaven"
          id="adress"
        />
        <SC.LabelAddNewData htmlFor="fish">Enter the fish</SC.LabelAddNewData>
        <SC.InputAddNewData
          type="text"
          name="fish"
          onChange={(evt) => {
            setFishes(evt.currentTarget.value.split(","));
          }}
          value={fishes}
          placeholder="e.g. fish1, fish2"
          id="fish"
        />
        <SC.LabelAddNewData htmlFor="fishingConditions">
          Enter the fishing conditions
        </SC.LabelAddNewData>
        <SC.InputAddNewData
          type="text"
          name="fishingConditions"
          onChange={(evt) => {
            setFishingConditions(evt.currentTarget.value);
          }}
          value={fishingConditions}
          placeholder="e.g. Everything is perfect"
          id="fishingConditions"
        />
        <SC.LabelAddNewData htmlFor="description">
          Enter the description
        </SC.LabelAddNewData>
        <textarea
          type="text"
          name="description"
          onChange={(evt) => {
            setDescription(evt.currentTarget.value);
          }}
          value={description}
          placeholder="e.g. Very interesting location"
          id="description"
          rows="5"
        />
        <SC.LabelAddNewData htmlFor="allowedTime">
          Enter the allowed time
        </SC.LabelAddNewData>
        <SC.InputAddNewData
          type="text"
          name="allowedTime"
          onChange={(evt) => {
            setAllowedTime(evt.currentTarget.value);
          }}
          value={allowedTime}
          placeholder="e.g. Whenever you want"
          id="allowedTime"
        />
        <button type="submit">Submit</button>
      </SC.FormContainer>
    </div>
  );
};
