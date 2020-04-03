import React, { useState } from "react";
import { Button } from "./functional-components/button/button";
import { Input } from "./functional-components/input/input";
import { Table } from "./functional-components/table/table";
import { ReactComponent as CartIcon } from "./cart.svg";
import { ReactComponent as CartReadydIcon } from "./cart-ready.svg";
import "./grocery.css";

const Grocery = () => {
  const [groceries, setGroceries] = useState([
    {
      item: "chana",
      quantity: 2,
      _selectedForCart: false,
    },
  ]);

  const addGrocery = (groceryName) => {
    const groceriesClone = [...groceries];
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
    setGroceries(groceriesClone);
  };

  return (
    <div>
      <AddGrocery onAdd={addGrocery} style={{ marginBottom: "2rem" }} />
      <GroceryList list={groceries} setGroceries={setGroceries} />
    </div>
  );
};

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

const GroceryList = (props) => {
  const headersHtml = Object.keys(props.list[0]).map((key) => {
    if (key.indexOf("_") !== 0) {
      return <th>{key}</th>;
    } else {
      return <th></th>;
    }
  });

  const toggleCartState = (groceryName) => {
    const groceriesClone = [...props.list];
    const grocery = groceriesClone.find(
      (grocery) => grocery.item === groceryName
    );

    grocery._selectedForCart = !grocery._selectedForCart;
    props.setGroceries(groceriesClone);
  };

  const rowsHtml = props.list.map((grocery) => (
    <tr
      className="highlightOnHover"
      onClick={() => {
        toggleCartState(grocery.item);
      }}
    >
      {Object.keys(grocery).map(
        (value) =>
          value.indexOf("_") !== 0 && <td align="center">{grocery[value]}</td>
      )}
      {grocery["_selectedForCart"] === true ? (
        <td>
          <CartIcon style={{ width: "1.8rem", height: "1.8rem" }} />
        </td>
      ) : (
        <td>
          <CartReadydIcon style={{ width: "1.8rem", height: "1.8rem" }} />
        </td>
      )}
    </tr>
  ));

  const data = {
    headersHtml,
    rowsHtml,
  };
  return <Table data={data} />;
};

export { Grocery };
