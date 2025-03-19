

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Local state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;

import { createContext, useContext, useState } from "react";

// 1️⃣ Create a Context
const ThemeContext = createContext();

// 2️⃣ Provide Global State
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Consume Global State
export const useTheme = () => useContext(ThemeContext);

// 4️⃣ Using it in a Component
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme: {theme}
    </button>
  );
};
