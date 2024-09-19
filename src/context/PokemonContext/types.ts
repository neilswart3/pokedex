import {
  PokemonItemDataResponse,
  PokemonListDataResponse,
  PokemonListItem,
  PokemonListMeta,
} from '@/types';
import { Reducer } from 'react';

export interface PokemonState {
  data: PokemonListItem[] | null;
  meta: PokemonListMeta | null;
  loading: boolean;
  error: string | null;
}

export enum PokemonActionType {
  FETCH_POKEMON = 'FETCH_POKEMON',
  FETCHED_POKEMON = 'FETCHED_POKEMON',
  UPDATE_POKEMON_ITEM = 'UPDATE_POKEMON_ITEM',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
}

interface FetchingPokemonAction {
  type: PokemonActionType.FETCHED_POKEMON;
  payload: { data: PokemonListDataResponse };
}

export namespace FetchPokemon {
  export type Type = PokemonActionType.FETCH_POKEMON;
  export type Payload = { payload: { name: string } };
  export type Action = Payload & { type: Type };
}

interface UpdatePokemonAction {
  type: PokemonActionType.UPDATE_POKEMON_ITEM;
  payload: { data: PokemonItemDataResponse };
}

interface LoadingAction {
  type: PokemonActionType.LOADING;
  payload: { loading: boolean };
}

interface ErrorAction {
  type: PokemonActionType.ERROR;
  payload: { error: string };
}

export type PokemonAction =
  | FetchingPokemonAction
  | FetchPokemon.Action
  | UpdatePokemonAction
  | LoadingAction
  | ErrorAction;

export type PokemonReducer = Reducer<PokemonState, PokemonAction>;

export type UsePokemonResult = [
  PokemonState,
  {
    fetchPokemonList: () => Promise<void>;
    fetchPokemonItem: (name: string) => Promise<void>;
    updatePokemonItem: (data: PokemonItemDataResponse) => void;
  },
];
