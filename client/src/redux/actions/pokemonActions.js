import axios from "../../api";
import {
  setPokemons,
  addPokemon,
  updatePokemon,
  deletePokemon,
} from "../reducers/pokemon";

// Buscar todos os Pokémons
export const fetchPokemons = () => async (dispatch) => {
  try {
    console.log("fetching pokemons...");
    const response = await axios.get("/pokemon");
    console.log("response from /pokemon:", response.data);
    dispatch(setPokemons(response.data));
  } catch (error) {
    console.error("Failed to fetch pokemons:", error);
  }
};

// Adicionar um Pokémon
export const createPokemon = (pokemonData) => async (dispatch) => {
  try {
    const response = await axios.post("/pokemon", pokemonData);
    dispatch(addPokemon(response.data));
  } catch (error) {
    console.error("Failed to add pokemon:", error);
  }
};

// Atualizar um Pokémon
export const editPokemon = (pokemonData) => async (dispatch) => {
  try {
    const response = await axios.put(`/pokemon/${pokemonData.id}`, pokemonData);
    dispatch(updatePokemon(response.data));
  } catch (error) {
    console.error("Failed to update pokemon:", error);
  }
};

// Deletar um Pokémon
export const removePokemon = (id) => async (dispatch) => {
  try {
    await axios.delete(`/pokemon/${id}`);
    dispatch(deletePokemon(id));
  } catch (error) {
    console.error("Failed to delete pokemon:", error);
  }
};
