import React from 'react';
import { useState } from 'react';

function Square(){
  const [value, setValue] = useState(null);

    function handleClick() {
    console.log('clicked!');
    setValue('X');
  }
 
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );

} 


export default function board() {
  return (
    <React.Fragment>
       <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>

  </React.Fragment> );
}



