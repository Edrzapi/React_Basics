// Here you have to pass the user through every single level (Grandparent → Parent → Child),
// even though only Child actually needs it. This is known as "prop drilling."

const Grandparent = ({ user }) => {
    // Passing user to Parent
    return <Parent user={user} />;
  };
  
  const Parent = ({ user }) => {
    // Passing user to Child
    return <Child user={user} />;
  };
  
  const Child = ({ user }) => {
    // Only the Child actually uses the user prop
    return <h1>Hello, {user.name}!</h1>;
  };
  

// Fixing the above issue can be done with state and context // 

import React, { createContext, useState, useContext } from 'react';

// Create a context for the user
const UserContext = createContext();

// Grandparent component
const NewGrandparent = () => {
  // Create and manage the 'user' state here
  const [user, setUser] = useState({ name: 'John Doe' });

  return (
    // Provide the user state to the entire tree through the context
    <UserContext.Provider value={user}>
      <NewParent /> {/* No need to pass user prop to Parent anymore */}
    </UserContext.Provider>
  );
};

const NewParent = () => {
  // Parent doesn't need to pass down the user anymore
  return <NewChild />;
};

const NewChild = () => {
  // Directly access the 'user' state from context
  const user = useContext(UserContext);

  // Now Child can directly use the user data without prop drilling
  return <h1>Hello, {user.name}!</h1>;
};

export default NewGrandparent; // Export the NewGrandparent component
