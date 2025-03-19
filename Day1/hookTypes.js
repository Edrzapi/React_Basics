// Import necessary React hooks
import React, { useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer, useLayoutEffect, useImperativeHandle, forwardRef, useDebugValue, createContext } from 'react';

// useState - Manages component state
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

// useEffect - Runs side effects (like fetching data or setting up listeners)
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []); // Runs only on mount

  return <p>Timer: {seconds} seconds</p>;
}

// useContext - Provides global state without prop drilling
const ThemeContext = createContext("light");
function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

// useRef - Accesses DOM elements without re-renders
function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus on mount
  }, []);

  return <input ref={inputRef} />;
}

// useMemo - Caches computed values to optimize performance
function ExpensiveComponent({ num }) {
  const squaredNumber = useMemo(() => num * num, [num]);
  return <p>Squared: {squaredNumber}</p>;
}

// useCallback - Memoizes functions to prevent unnecessary re-creations
function Parent() {
  const [count, setCount] = useState(0);
  const memoizedHandleClick = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={memoizedHandleClick}>Increase</button>
    </div>
  );
}

// useReducer - Alternative to useState for complex logic
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
};
function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

// useLayoutEffect - Runs before the browser paints the UI
function LayoutExample() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
  }, []);

  return <div ref={divRef}>Hello</div>;
}

// useImperativeHandle - Exposes child component methods to parent
const CustomInput = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => console.log("Focus triggered!"),
  }));
  return <input />;
});
function ParentWithImperativeHandle() {
  const inputRef = useRef(null);
  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

// useDebugValue - Helps debug custom hooks
function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(value > 5 ? "Greater than 5" : "Less than or equal to 5");
  return [value, setValue];
}

// Export components for use in an app
export { Counter, Timer, ThemedComponent, FocusInput, ExpensiveComponent, Parent, CounterReducer, LayoutExample, ParentWithImperativeHandle };
