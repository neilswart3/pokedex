import { Dispatch, Reducer } from 'react';

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonState {
  data: PokemonListData | null;
  loading: boolean;
  error: string | null;
}

export enum PokemonActionType {
  FETCHED_POKEMON = 'FETCHED_POKEMON',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
}

interface FetchingPokemonAction {
  type: PokemonActionType.FETCHED_POKEMON;
  payload: { data: PokemonListData };
}

interface LoadingAction {
  type: PokemonActionType.LOADING;
  payload: { loading: boolean };
}

interface ErrorAction {
  type: PokemonActionType.ERROR;
  payload: { error: string };
}

export type PokemonAction = FetchingPokemonAction | LoadingAction | ErrorAction;
export type PokemonReducer = Reducer<PokemonState, PokemonAction>;

export type UsePokemonResult = [
  PokemonState,
  { dispatch: Dispatch<PokemonAction> },
];
