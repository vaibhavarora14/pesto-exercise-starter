import React, { useState } from 'react';
import { Button } from './functional-components/button';
import { Input } from './functional-components/input';
import { Table } from './functional-components/table';


const Grocery = () => {
  const [groceries, setGroceries] = useState([{
    item: 'chana',
    quantity: 2
  }]);

  const addGrocery = (groceryName) => {
    const groceriesClone = [...groceries];
    const grocery = groceriesClone.find(grocery => grocery.item === groceryName);

    if (grocery) {
      grocery.quantity += 1;
    } else {
      groceriesClone.push({
        item: groceryName,
        quantity: 1
      });
    }
    setGroceries(groceriesClone);
  }

  return (
    <div>
      <AddGrocery onAdd={addGrocery} />
      <GroceryList list={groceries} />
    </div>
  );
};

const AddGrocery = (props) => {
  let [isInputEmpty, setIsInputEmpty] = useState(true);
  let [inputValue, setInputValue] = useState('');

  const changeHandler = ({ target: { value } }) => {
    if (value.trim() !== '') {
      setIsInputEmpty(false);
    } else {
      setIsInputEmpty(true);
    }

    setInputValue(value.trim());
  }

  return (
    <div>
      <Input id="groceryInput" value={inputValue} changeHandler={changeHandler} />
      <Button value='Add' disabled={isInputEmpty} clickHandler={() => { props.onAdd(inputValue); setInputValue(''); }} />
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
