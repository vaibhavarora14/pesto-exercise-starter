import React, { useState } from "react";
import Button from "../functional-components/button/button";
import Input from "../functional-components/input/input";

const AddGrocery = (props) => {
  let [isInputEmpty, setIsInputEmpty] = useState(true);
  let [inputValue, setInputValue] = useState("");

  const changeHandler = ({ target: { value } }) => {
    if (value.trim() !== "") {
      setIsInputEmpty(false);
    } else {
      setIsInputEmpty(true);
    }

    setInputValue(value.trim());
  };

  const addGrocery = () => {
    props.onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div style={props.style}>
      <h1>Grocery Shop</h1>
      <Input
        id="groceryInput"
        value={inputValue}
        changeHandler={changeHandler}
        enterHanlder={addGrocery}
        style={{ marginRight: "2rem" }}
      />
      <Button
        value="Add"
        disabled={isInputEmpty}
        clickHandler={addGrocery}
        style={{ minWidth: "5rem" }}
      />
    </div>
  );
};

export default AddGrocery;
