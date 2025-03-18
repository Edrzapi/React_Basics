import React, { useState, useEffect } from "react";

const Counter = () => {
  // State initialization using useState hook
  const [count, setCount] = useState(0);

  // useEffect hook to simulate componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("Counter component has mounted!");

    // Simulating fetching initial data after mount
    const timer = setTimeout(() => {
      setCount(5); // Updating state after mount
      console.log("State updated after mount!");
    }, 2000);

    // Cleanup function for componentWillUnmount
    return () => {
      console.log("Counter component will unmount!");
      clearTimeout(timer); // Cleanup timeout when component unmounts
    };
  }, []); // Empty dependency array means this effect runs once after the first render (componentDidMount)

  // useEffect to handle updates (runs whenever 'count' changes)
  useEffect(() => {
    console.log("Counter component has updated!");
    console.log(`Previous count: ${count - 1}, Current count: ${count}`);
  }, [count]); // Dependency on 'count', so it runs when 'count' changes

  // Method to update state when button is clicked
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default Counter;
