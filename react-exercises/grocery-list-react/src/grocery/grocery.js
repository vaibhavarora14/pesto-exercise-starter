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

export { Grocery };
