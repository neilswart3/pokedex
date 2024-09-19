import { PokemonListItem } from '@/types';
import { PokemonAction, PokemonActionType, PokemonState } from './types';
import { findPokemon } from '@/utils';

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
      const {
        data: { results: data, ...meta },
      } = payload;

      return {
        ...state,
        loading: false,
        data,
        meta,
      };
    case PokemonActionType.UPDATE_POKEMON_ITEM:
      const dataIndex = state?.data?.indexOf(
        findPokemon(state?.data, payload.data.name) as PokemonListItem,
      );

      const results = state?.data || [];
      const types = payload?.data?.types;
      const id = payload?.data?.id;

      results[dataIndex as number] = {
        ...results[dataIndex as number],
        ...(id ? { id } : {}),
        ...(types ? { types } : {}),
      };

      return {
        ...state,
        loading: false,
        data: results as PokemonListItem[],
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
