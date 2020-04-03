import React from "react";
import Table from "../functional-components/table/table";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as CartReadydIcon } from "../assets/cart-ready.svg";

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

export default GroceryList;
