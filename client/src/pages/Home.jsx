// src/pages/Home.js
import React from "react";
import "./Home.scss";
import PokemonList from "../components/PokemonList/PokemonList";

function Home() {
  return (
    <div>
      <h1>Pokemon App</h1>
      <PokemonList />
    </div>
  );
}

export default Home;
