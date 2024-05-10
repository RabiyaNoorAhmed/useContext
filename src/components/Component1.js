
import React, { useContext } from 'react';
import { counterContext } from '../context/Context';

const Component1 = () => {

  const value = useContext(counterContext);

  return (
    <div>
      {value.count} {/* Display the current count from the counterContext */}
    </div>
  );
}
export default Component1;
