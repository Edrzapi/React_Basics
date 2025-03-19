import React, { createContext } from 'react';

// Create the context (think of this as a container for the shared state)
const MyContext = createContext(null);

// A standard class component 
class A extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: 'Hello from Context',  // State to share, this will be provided to child components
      };
    }
  
    render() {
      return (
        // Providing 'data' to all components inside MyContext.Provider
        <MyContext.Provider value={this.state.data}>
          <B />
          <C />
        </MyContext.Provider>
      );
    }
}

class B extends React.Component {
    render() {
      return (
        // Using Consumer to access the context value ('data')
        <MyContext.Consumer>
          {(data) => (
            <div>
              <h2>Component B</h2>
              <p>{data}</p>  {/* Displays 'Hello from Context' */}
            </div>
          )}
        </MyContext.Consumer>
      );
    }
}

class C extends React.Component {
    render() {
      return (
        // Using Consumer to access the context value ('data')
        <MyContext.Consumer>
          {(data) => (
            <div>
              <h2>Component C</h2>
              <p>{data}</p>  {/* Displays 'Hello from Context' */}
            </div>
          )}
        </MyContext.Consumer>
      );
    }
}
