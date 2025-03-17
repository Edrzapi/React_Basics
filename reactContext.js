// This is an example of prop drilling

function AppOne() {
    const theme = "dark"; // Theme data at top level

    return <Parent theme={theme} />;
}

function Parent({ theme }) {
    return <Child theme={theme} />;
}

function Child({ theme }) {
    return <ThemedButton theme={theme} />;
}

function ThemedButton({ theme }) {
    return <button className={theme}>Themed Button</button>;
}

export default AppOne;


// Notice the theme prop is passed to multple components uncessecerily?
// The problems go a little deeper than that though, as every component will need updates if the structure changes,
// Making it much harder to scale/maintain

// Instead of the above, we can use the react context api:
import { createContext, useContext } from "react";

// Create a context
const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Parent />
    </ThemeContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext); // Access value from context
  return <button className={theme}>Themed Button</button>;
}

export default App;

