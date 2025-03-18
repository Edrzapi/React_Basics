import React from "react";
import PokeList from "./components/pokeList"; // Import the PokeList component

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Pokémon CRUD App</h1>
      {/* Rendering the PokeList component which handles the actual CRUD operations */}
      <PokeList />
    </div>
  );
};

export default App;
