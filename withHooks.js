import React, { Component } from "react";

class Counter extends Component {
  // Constructor required for state initialization
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Lifecycle method: Runs once when the component is mounted
  componentDidMount() {
    console.log("Counter component has mounted!");

    // Example: Simulate fetching initial data after mount
    setTimeout(() => {
      this.setState({ count: 5 }); // Updating state after mount
      console.log("State updated after mount!");
    }, 2000);
  }

  // Lifecycle method: Runs every time the component updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Counter component has updated!");
      console.log(`Previous count: ${prevState.count}, Current count: ${this.state.count}`);
    }
  }

  // Lifecycle method: Runs just before the component is unmounted
  componentWillUnmount() {
    console.log("Counter component will unmount!");
    // You can perform cleanup tasks here like clearing timers, canceling network requests, etc.
  }

  // Method to update state when button is clicked
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default Counter;
