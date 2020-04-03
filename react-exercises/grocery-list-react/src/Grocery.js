import React from 'react';
import { Button } from './functional-components/button';
import { Input } from './functional-components/input';
import { Table } from './functional-components/table';


const Grocery = () => {
  const groceries = [{
    item: 'chana',
    quantity: 2
  }];

  return (
    <div>
      <AddGrocery />
      <GroceryList list={groceries} />
    </div>
  );
};

const AddGrocery = () => {

  let isInputEmpty = true;
  const changeHandler = (event) => {
    if (event.target.value.trim() !== '') {
      isInputEmpty = false;
    } else {
      isInputEmpty = true;
    }
  }

  return (
    <div>
      <Input changeHandler={changeHandler} />
      <Button value='Add' disabled={!isInputEmpty} />
    </div>
  );
};

const GroceryList = (props) => {
  const tableData = {
    columns: ['item', 'quantity'],
    rows: props.list
  }
  return (
    <Table data={tableData} />
  );
};

export {
  Grocery
};
