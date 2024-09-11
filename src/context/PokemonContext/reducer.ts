import { PokemonAction, PokemonActionType, PokemonState } from './types';

const pokemonReducer = (
  state: PokemonState,
  { type, payload }: PokemonAction,
): PokemonState => {
  switch (type) {
    case PokemonActionType.LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case PokemonActionType.FETCHED_POKEMON:
      return {
        ...state,
        loading: false,
        data: payload.data,
      };
    case PokemonActionType.ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
