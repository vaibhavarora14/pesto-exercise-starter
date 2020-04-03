import React from 'react';

const Table = (props) => {
  const data = props.data;
  const headers = data.columns.map(column => <th>{column}</th>);

  const rows = data.rows.map(row => <tr>{
    Object.keys(row).map(value => <td>{row[value]}</td>)
  }</tr>)

  return (
    <table>
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export {
  Table
}