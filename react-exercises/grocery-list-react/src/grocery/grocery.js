import React, { useState } from "react";
import AddGrocery from "./add-grocery";
import GroceryList from "./grocery-list";
import "./grocery.css";

const Grocery = () => {
  const [groceries, setGroceries] = useState([
    {
      item: "chana",
      quantity: 2,
      _selectedForCart: false,
    },
  ]);

  return (
    <div>
      <h1>Grocery Shop</h1>
      <AddGrocery
        groceries={groceries}
        groceriesSetter={setGroceries}
        style={{ marginBottom: "2rem" }}
      />
      <GroceryList list={groceries} setGroceries={setGroceries} />
    </div>
  );
};

export { Grocery };
