import React, { useState } from "react";
import "./index.css";

const AddItemForm = (props) => {
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAvailableSizes, setEnteredAvailableSizes] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const setObjectData = (event) => {
    if (event.target.name === "img") {
      var fread = new FileReader();
      fread.readAsDataURL(event.target.files[0]);
      fread.onloadend = function (event) {
        setEnteredImage(event.target.result);
      };
      setEnteredImage(event.target.files[0]);
    }
    if (event.target.name === "title") setEnteredTitle(event.target.value);
    if (event.target.name === "desc") setEnteredDescription(event.target.value);
    if (event.target.name === "availableSize")
      setEnteredAvailableSizes(event.target.value);
    if (event.target.name === "price") setEnteredPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.setsubmit(() => {
      return {
        image: enteredImage,
        title: enteredTitle,
        description: enteredDescription,
        availableSizes: enteredAvailableSizes,
        price: enteredPrice,
      };
    });
    props.submitflagfunc(true);
    /*const newData = {
      image: enteredImage,
      title: enteredTitle,
      description: enteredDescription,
      availableSizes: enteredAvailableSizes,
      price: enteredPrice,
    };*/
    //console.log(newData);
    console.log(props.submititem);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="new-expense__controls new-expense"
      >
        <div className="new-expense__controls">
          <div>
            <label for="img">Select image:</label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={setObjectData}
            ></input>
          </div>

          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              name="title"
              onChange={setObjectData}
            />
          </div>

          <div className="new-expense__control">
            <label>Describtion</label>
            <input
              type="text"
              value={enteredDescription}
              name="desc"
              onChange={setObjectData}
            />
          </div>

          <div className="new-expense__control">
            <label>availableSize</label>
            <input
              type="text"
              value={enteredAvailableSizes}
              name="availableSize"
              onChange={setObjectData}
            />
          </div>

          <div className="new-expense__control">
            <label>price</label>
            <input
              type="number"
              value={enteredPrice}
              name="price"
              onChange={setObjectData}
            />
          </div>

          <div className="new-expense__actions">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <img src={enteredImage} width="100" height="100" />
    </>
  );
};

export default AddItemForm;
