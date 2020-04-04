import React, { useState } from "react";
import Button from "../functional-components/button/button";
import Input from "../functional-components/input/input";

const AddGrocery = (props) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = ({ target: { value } }) => {
    setInputValue(value.trim());
  };

  const addGrocery = () => {
    addGroceries(inputValue, props.groceries, props.groceriesSetter);
    resetInputValue(setInputValue);
  };

  return (
    <div style={props.style}>
      <Input
        id="groceryInput"
        value={inputValue}
        changeHandler={changeHandler}
        enterHanlder={addGrocery}
        style={{ marginRight: "2rem" }}
      />
      <Button
        value="Add"
        disabled={inputValue.trim() === ""}
        clickHandler={addGrocery}
        style={{ minWidth: "5rem" }}
      />
    </div>
  );
};

function resetInputValue(inputSetter) {
  inputSetter("");
}

function addGroceries(groceryName, groceriesArray, groceriesSetter) {
  const groceriesClone = [...groceriesArray];
  const grocery = groceriesClone.find(
    (grocery) => grocery.item === groceryName
  );

  if (grocery) {
    grocery.quantity += 1;
  } else {
    groceriesClone.push({
      item: groceryName,
      quantity: 1,
      _selectedForCart: false,
    });
  }
  groceriesSetter(groceriesClone);
}

export default AddGrocery;
