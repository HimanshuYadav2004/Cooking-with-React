import React from "react";
import { useState } from "react";
import "./App.css";
import { themeContext } from "./App";
import { useContext } from "react";

function Counter()
{
  const [ Count, setCount ] = useState( 3 );
  
  const style = useContext(themeContext)
    return (
    <div>
      <h1>Counter App</h1>
          <button style={style} onClick={()=>setCount( prevcount => prevcount + 1 )}>+</button>
            <p>{Count}</p>
        <button style={style}  onClick={()=> setCount( decCount => decCount - 1)}>-</button>
    </div>
  )
}

export default Counter;
