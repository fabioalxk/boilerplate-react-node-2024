import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const reducers = {
  setPokemons: (state, action) => {
    state.list = action.payload;
  },
  addPokemon: (state, action) => {
    state.list.push(action.payload);
  },
  updatePokemon: (state, action) => {
    const index = state.list.findIndex(
      (pokemon) => pokemon.id === action.payload.id
    );
    if (index !== -1) {
      state.list[index] = action.payload;
    }
  },
  deletePokemon: (state, action) => {
    state.list = state.list.filter(
      (pokemon) => pokemon.id !== action.payload
    );
  },
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers,
});

// Exporta as actions e o reducer
export const { setPokemons, addPokemon, updatePokemon, deletePokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;

// // src/redux/reducers/user.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   list: [],
// };

// const reducers = {
//   setUsers: (state, action) => {
//     state.list = action.payload;
//   },
//   addUser: (state, action) => {
//     state.list.push(action.payload);
//   },
//   updateUser: (state, action) => {
//     const index = state.list.findIndex((user) => user.id === action.payload.id);
//     if (index !== -1) {
//       state.list[index] = action.payload;
//     }
//   },
//   deleteUser: (state, action) => {
//     state.list = state.list.filter((user) => user.id !== action.payload);
//   },
// };

// export const session = createSlice({
//   name: "session",
//   initialState,
//   reducers,
// });
