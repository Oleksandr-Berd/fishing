export const NewData = () => {
  const submitHandler = (evt) => {
    evt.preventDefault();
    const { image } = evt.target;
    const data = new FormData();
    data.append("image", image.files[0]);
  };

  return (
    <div>
      <form
        method="post"
        name="image"
        id="form"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        <input type="file" name="image" multiple />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
