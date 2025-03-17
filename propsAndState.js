// App.js (or index.js)
import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';

// Props //

// Passed to components: Props are passed from parent to child components.
// Read-only: Once a component receives props, they cannot be changed by the child component. They are immutable within the component that receives them.
// Used for communication: Props allow parent components to communicate with their child components, passing down data and event handlers.
// Data flow: The data flow through props is unidirectional, meaning from parent to child.

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="John" />;
}

// State //

// Managed inside the component: State is a local data storage for a component and is managed by the component itself.
// Mutable: Unlike props, state can be changed using the setState() method (in class components) or the useState hook (in function components).
// Triggers re-render: When the state changes, React automatically re-renders the component to reflect the updated state in the UI.
// Used for dynamic data: State is typically used for data that changes over time or in response to user actions (like form inputs, toggle buttons, etc.).

// Functional component with useState hook
function CounterWithHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// The naming convention above makes more sense when you consider how things used to look:
// pre 16.8 (class components)

class CounterWithClass extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Function to handle state change
  increment = () => {
    // Updating state with setState
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increment}>Click me</button>
      </div>
    );
  }
}

// Rendering the components
function MainApp() {
  return (
    <div>
      <h2>Props Example</h2>
      <App /> {/* Displaying Greeting with the name "John" */}
      
      <h2>State Example with Hooks</h2>
      <CounterWithHooks /> {/* Displaying the functional component with hooks */}
      
      <h2>State Example in Class Component</h2>
      <CounterWithClass /> {/* Displaying the class component */}
    </div>
  );
}

// Render MainApp to the DOM
ReactDOM.render(<MainApp />, document.getElementById('root'));
