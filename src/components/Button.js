
import React, { useContext } from 'react';
import Component1 from './Component1';
import { counterContext } from '../context/Context';

const Button = () => {
  // Access the context value using useContext hook, which allows us the context changes.
  const value = useContext(counterContext);


  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span><Component1/></span> {/* Component1 displays the current value of the counter. */}
        I am a button 
      </button>
    </div>
  );
}
export default Button;
