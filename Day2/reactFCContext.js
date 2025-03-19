// Think of this as useMyContext.js a context provider like "projectContext" would be in a Tracking App
import { useContext } from 'react';
import { MyContext } from './A'; // Import the context from the Provider component

// Custom hook to access the context
const useMyContext = () => {
  return useContext(MyContext); // Return the context value
};

export default useMyContext;


// A.js
import React, { createContext, useState } from 'react';
import D from './D'; // Importing the D component where we'll use the custom hook

// Create the context (a container for the shared state)
export const MyContext = createContext(null); // Export context so it can be accessed

// A functional component (Provider)
const A = () => {
  const [myData, setMyData] = useState('Hello from Context'); // State to share

  return (
    // Providing 'myData' to all components inside MyContext.Provider
    <MyContext.Provider value={{ myData }}>
      <D /> {/* Component D will consume this context */}
    </MyContext.Provider>
  );
};

// export default A; Can't have multiple exports!

// D.js
import React from 'react';
import useMyContext from './useMyContext'; // Import the custom hook

const D = () => {
  const { myData } = useMyContext(); // Destructure the value returned by the custom hook
  return (
    <p>{myData}</p> // Display the shared data
  );
};

// export default D; Can't have multiple imports


