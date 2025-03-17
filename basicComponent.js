import React from 'react'; // Importing React library to be able to write JSX and use React functionality.

function Greeting() {
  // The 'Greeting' component is a functional component in React.
  // It's a basic React component that returns some JSX, which is essentially HTML-like syntax.
  // JSX allows us to write HTML structure directly within JavaScript code.

  return <h1>Hello, welcome to React!</h1>; 
  // This is the JSX returned by the component. JSX gets transpiled into JavaScript.
  // Here we are returning an <h1> HTML tag with the text "Hello, welcome to React!" inside.
  // This is rendered on the screen when the component is used in the app.
}

// This export statement allows the 'Greeting' component to be used in other parts of the app.
// By using 'export default', this component is made available for import in other files.
export default Greeting;


// Named exporting 

export function Greeting() {
  return <h1>Hello, welcome to React!</h1>;
}

export function Goodbye() {
  return <h1>Goodbye from React!</h1>;
}

// Consumed :
import { Greeting, Goodbye } from './Greeting';  // Importing by exact names


import { Greeting as WelcomeMessage, Goodbye as FarewellMessage } from './Greeting';

console.log(WelcomeMessage);  // Now this refers to Greeting()
