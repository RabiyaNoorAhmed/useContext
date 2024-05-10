
import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { counterContext } from './context/Context';

function App() {
  // Initialize useState 'count' with a default value of 0. Provide 'setCount' method to update this state.
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Provide the counter state and the updater function through context to the child components */}
      <counterContext.Provider value={{count, setCount}}>
        <Navbar/>
        <div>
          {/* Button element which increments the count state by 1 on each click */}
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </counterContext.Provider>
    </>
  );
}
export default App;
