import React, { useState, useEffect } from "react";

const NotHome = () => {
  const [counter, setCounter] = useState(0);  // Initial counter value is 0

  // Function to increase the counter
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  // Function to decrease the counter
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  // useEffect hook to handle side effects like showing a message when counter > 5
  useEffect(() => {
    if (counter < 0) {
      setCounter(0);  // Reset counter if it goes below 0
    }
  }, [counter]);  // Re-run the effect whenever counter changes

  return (
    <div>
      <h1>Not Home Page</h1>
      <p>Counter: {counter}</p>
      {counter > 5 && <p>You passed 5!</p>}  {/* Display message if counter > 5 */}

      <button onClick={increaseCounter}>Increase</button>  {/* Button to increase counter */}
      <button onClick={decreaseCounter}>Decrease</button>  {/* Button to decrease counter */}
    </div>
  );
};

export default NotHome;
