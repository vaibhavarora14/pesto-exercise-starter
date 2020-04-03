import React from "react";
import "./table.css";

const Table = (props) => {
  const data = props.data;

  return (
    <table>
      <thead>
        <tr>{data.headersHtml}</tr>
      </thead>
      <tbody>{data.rowsHtml}</tbody>
    </table>
  );
};

export default Table;
