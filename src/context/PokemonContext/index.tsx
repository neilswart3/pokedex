'use client';

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReducerAction,
  useContext,
  useReducer,
} from 'react';
import pokemonReducer from './reducer';
import {
  PokemonActionType,
  PokemonReducer,
  PokemonState,
  UsePokemonResult,
} from './types';
import { PokemonRepository } from '@/services';
import { PokemonItemDataResponse, PokemonListDataResponse } from '@/types';

const initPokemonState: PokemonState = {
  data: null,
  meta: null,
  loading: false,
  error: null,
};

const PokemonContext = createContext<PokemonState>(initPokemonState);
const PokemonDispatchContext = createContext<
  Dispatch<ReducerAction<PokemonReducer>>
>(() => initPokemonState);

interface Props extends PropsWithChildren {
  value?: PokemonListDataResponse | null;
}

export const PokemonProvider: React.FC<Props> = ({
  children,
  value = null,
}) => {
  const [pokemon, dispatch] = useReducer<PokemonReducer>(
    pokemonReducer,
    value
      ? {
          ...initPokemonState,
          data: value.results,
          meta: {
            count: value.count,
            next: value.next,
            previous: value.previous,
          },
        }
      : initPokemonState,
  );

  return (
    <PokemonContext.Provider value={pokemon}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): UsePokemonResult => {
  const pokemon = useContext(PokemonContext);
  const dispatch = useContext(PokemonDispatchContext);

  const updatePokemonItem = (data: PokemonItemDataResponse): void => {
    dispatch({ type: PokemonActionType.LOADING, payload: { loading: true } });
    dispatch({
      type: PokemonActionType.UPDATE_POKEMON_ITEM,
      payload: { data },
    });
  };

  const fetchPokemonItem = async (name: string): Promise<void> => {
    try {
      dispatch({ type: PokemonActionType.LOADING, payload: { loading: true } });

      const data = await PokemonRepository.fetchPokemonItem(name);

      if (!data) throw new Error('Failed to fetch Pokemon item');

      dispatch({
        type: PokemonActionType.UPDATE_POKEMON_ITEM,
        payload: { data },
      });
    } catch (error) {
      console.error(error);

      dispatch({
        type: PokemonActionType.ERROR,
        payload: { error: (error as Error).message },
      });
    }
  };

  const fetchPokemonList = async (): Promise<void> => {
    try {
      dispatch({ type: PokemonActionType.LOADING, payload: { loading: true } });

      const data = await PokemonRepository.fetchPokemonList();

      if (!data) throw new Error('Failed to fetch Pokemon list');

      dispatch({
        type: PokemonActionType.FETCHED_POKEMON,
        payload: { data },
      });
    } catch (error) {
      console.error(error);

      dispatch({
        type: PokemonActionType.ERROR,
        payload: { error: (error as Error).message },
      });
    }
  };

  return [pokemon, { fetchPokemonList, fetchPokemonItem, updatePokemonItem }];
};
