import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/actions/pokemonActions";

function PokemonList() {
  const dispatch = useDispatch();
  const { list: pokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className="pokemon-container">
      <h2>Lista de Pokémons</h2>
      <ul>
        {pokemons.map((pkm, index) => (
          <li key={index}>{pkm.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
