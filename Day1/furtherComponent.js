// Class components are the older way of defining components in React. They offer powerful features such as lifecycle methods, but they can be more verbose.
// Functional components are simpler and more concise, and with the introduction of hooks like useState and useEffect, they now provide the same functionality 
// as class components, without the need for lifecycle methods or this binding.


import React, { useState } from 'react';

// Older Class Component
class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Initialize state
  }

  // Method to handle button click
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

// New Functional Component using Hooks
const CounterFunctionalComponent = () => {
  const [count, setCount] = useState(0); // useState hook for state

  // Handle button click
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Functional Component Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

// Main App Component to render both counters
const App = () => {
  return (
    <div>
      <CounterClassComponent />
      <CounterFunctionalComponent />
    </div>
  );
};

export default App;
