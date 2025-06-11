import React from 'react';
import "./App.css";
import Counter from './counter';
export const themeContext = React.createContext();
import { useState } from 'react';

function App ()
{
   const [ theme, settheme ] = useState( "white" );
  return (
    <themeContext.Provider value={{backgroundColor: theme}}>
      <Counter />
      <button onClick={ () => settheme( prevtheme =>
      {
        return prevtheme === "white" ? "blue" : "white"
      })}>Toggle Theme</button>
    </themeContext.Provider>
  );
}

export default App;
