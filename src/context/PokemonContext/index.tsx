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
  PokemonListData,
  PokemonReducer,
  PokemonState,
  UsePokemonResult,
} from './types';

const initPokemonState: PokemonState = {
  data: null,
  loading: false,
  error: null,
};

const PokemonContext = createContext<PokemonState>(initPokemonState);
const PokemonDispatchContext = createContext<
  Dispatch<ReducerAction<PokemonReducer>>
>(() => initPokemonState);

interface Props extends PropsWithChildren {
  value?: PokemonListData | null;
}

export const PokemonProvider: React.FC<Props> = ({
  children,
  value = null,
}) => {
  const [pokemon, dispatch] = useReducer<PokemonReducer>(
    pokemonReducer,
    value ? { ...initPokemonState, data: value } : initPokemonState,
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

  //   const handleFetchPokemon = useCallback(async (): Promise<void> => {
  //     console.log('handleFetchPokemon');
  //     try {
  //       dispatch({ type: PokemonActionType.LOADING, payload: { loading: true } });

  //       dispatch({
  //         type: PokemonActionType.FETCHED_POKEMON,
  //         payload: { data: [] },
  //       });
  //     } catch (error) {
  //       console.error(error);

  //       dispatch({
  //         type: PokemonActionType.ERROR,
  //         payload: { error: (error as Error).message },
  //       });
  //     }
  //   }, [dispatch]);

  //   useEffect(() => {
  //     handleFetchPokemon();
  //   }, [handleFetchPokemon]);

  return [pokemon, { dispatch }];
};
