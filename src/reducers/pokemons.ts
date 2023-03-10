import { SET_POKEMONS } from "@/actions/types";

const initialState = {
  pokemons: [],
};

export const pokemonsReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
