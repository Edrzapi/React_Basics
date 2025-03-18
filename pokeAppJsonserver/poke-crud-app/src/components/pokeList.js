import React, { useState, useEffect } from "react";

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPokemon, setNewPokemon] = useState("");
  const [editingPokemon, setEditingPokemon] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("http://localhost:5000/pokemons");
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon");
        }
        const data = await response.json();
        setPokemonList(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  const addPokemon = async () => {
    if (!newPokemon) return;

    const newId = pokemonList.length > 0 ? Math.max(...pokemonList.map(p => p.id)) + 1 : 1;
    const newPokemonData = { id: newId, name: newPokemon };

    try {
      const response = await fetch("http://localhost:5000/pokemons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPokemonData),
      });

      if (!response.ok) {
        throw new Error("Failed to add new Pokémon");
      }

      setPokemonList((prevList) => [...prevList, newPokemonData]);
      setNewPokemon("");
    } catch (err) {
      setError(err.message);
    }
  };

  const updatePokemon = async () => {
    if (!editName) return;
    const updatedPokemonData = { ...editingPokemon, name: editName };

    try {
      const response = await fetch(`http://localhost:5000/pokemons/${editingPokemon.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPokemonData),
      });

      if (!response.ok) {
        throw new Error("Failed to update Pokémon");
      }

      setPokemonList((prevList) =>
        prevList.map((pokemon) =>
          pokemon.id === editingPokemon.id ? updatedPokemonData : pokemon
        )
      );
      setEditingPokemon(null);
      setEditName("");
    } catch (err) {
      setError(err.message);
    }
  };

  const deletePokemon = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/pokemons/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to delete Pokémon");
      }
      setPokemonList((prevList) => prevList.filter((pokemon) => pokemon.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading Pokémon...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={styles.container}>
      <h2>List of Pokémon</h2>
      <ul style={styles.pokemonList}>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id} style={styles.pokemonItem}>
            <span>{pokemon.name}</span>
            <div style={styles.buttonGroup}>
              <button onClick={() => deletePokemon(pokemon.id)} style={styles.deleteButton}>Delete</button>
              <button onClick={() => { setEditingPokemon(pokemon); setEditName(pokemon.name); }} style={styles.editButton}>Edit</button>
            </div>
          </li>
        ))}
      </ul>

      <div style={styles.inputContainer}>
        <input type="text" value={newPokemon} onChange={(e) => setNewPokemon(e.target.value)} placeholder="Add new Pokémon" style={styles.input} />
        <button onClick={addPokemon} style={styles.addButton}>Add Pokémon</button>
      </div>

      {editingPokemon && (
        <div style={styles.editContainer}>
          <h3>Editing {editingPokemon.name}</h3>
          <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Edit Pokémon name" style={styles.input} />
          <button onClick={updatePokemon} style={styles.saveButton}>Save Changes</button>
          <button onClick={() => setEditingPokemon(null)} style={styles.cancelButton}>Cancel</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  pokemonList: { listStyleType: "none", padding: 0 },
  pokemonItem: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
  buttonGroup: { display: "flex", gap: "10px" },
  deleteButton: { backgroundColor: "#F44336", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "4px" },
  editButton: { backgroundColor: "#FF9800", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "4px" },
  inputContainer: { marginTop: "20px" },
  input: { padding: "8px", marginRight: "10px", border: "1px solid #ccc", borderRadius: "4px", width: "200px" },
  addButton: { backgroundColor: "#4CAF50", color: "white", border: "none", padding: "8px 15px", cursor: "pointer", borderRadius: "4px" },
  editContainer: { marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#f9f9f9" },
  saveButton: { backgroundColor: "#4CAF50", color: "white", border: "none", padding: "8px 15px", cursor: "pointer", borderRadius: "4px", marginRight: "10px" },
  cancelButton: { backgroundColor: "#f44336", color: "white", border: "none", padding: "8px 15px", cursor: "pointer", borderRadius: "4px" }
};

export default PokeList;
