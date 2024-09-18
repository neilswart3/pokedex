import {
  PokemonAction,
  PokemonActionType,
  PokemonListData,
  PokemonListItem,
  PokemonState,
} from './types';

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
    case PokemonActionType.UPDATE_POKEMON:
      const dataIndex = state?.data?.results.indexOf(
        state?.data?.results?.find(
          (item) => item.name === payload.data.name,
        ) as PokemonListItem,
      );

      const results = state?.data?.results || [];
      const types = payload?.data?.types;

      results[dataIndex as number] = {
        ...results[dataIndex as number],
        ...(types ? { types } : {}),
      };

      return {
        ...state,
        data: { ...state.data, results } as PokemonListData,
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
