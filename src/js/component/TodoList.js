import React, { useState } from "react";

import Item from "./Item";

const TodoList = () => {
  const [list, setList] = useState([
    "Comprar pan",
    "Limpiar arenero gato",
    "Escribir",
  ]);
  const [inputValue, setInputValue ] = useState('');


  const handleKeyUp = (e) => {
    const {key} = e;

    if (key!='Enter' || !inputValue.trim()) {
        return;
    }

    setList([
        ...list,
        inputValue
    ]);

    setInputValue('');

  };

  const handleRemoveItem = (e) => {
    console.log('Item ID to remove: ' + e.target.id);
    setList(list.filter((t, index) => index != e.target.id));
  };

  return (
    <div>
      <div className="input-group">
        <input
        onKeyUp={handleKeyUp}
          type="text"
          className="form-control"
          placeholder="Write your task..."
          aria-label="new-task"
          onChange={e => setInputValue(e.target.value)} value={inputValue} 
        />
      </div>
      <ul className="list-group">
        {list.map((t, index) => (
          <Item key={index} id={index} onClickRemoteItem={handleRemoveItem} text={t}/>    
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
