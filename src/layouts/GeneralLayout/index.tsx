'use client';

import { Header } from '@/components';
import { usePokemon } from '@/context';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { PropsWithChildren, useEffect, useMemo } from 'react';

interface Props extends PropsWithChildren {}

const GeneralLayout: React.FC<Props> = ({ children }) => {
  const params = useParams<{ name: string }>();

  const [res, { fetchPokemon }] = usePokemon();
  //   //   const res = usePokemon();

  console.log('res:', res);

  //   console.log('res:', res);

  //   console.log('loading:', res?.loading);
  //   console.log('data:', res?.data);

  //   const selectedPokemon = useMemo(
  //     () => res?.data?.find(({ name }) => name === params?.name),
  //     [res, params?.name],
  //   );

  //   console.log('data:', data);
  //   console.log('selectedPokemon:', selectedPokemon);

  //   const fetchPokemon = async () => {
  //     await dispatch({
  //       type: PokemonActionType.FETCH_POKEMON,
  //       payload: { name: selectedPokemon.name },
  //     });
  //   };

  //   useEffect(() => {
  //     if (selectedPokemon && !selectedPokemon.types) {
  //       dispatch({ type: PokemonActionType.LOADING, payload: { loading: true } });
  //       fetchPokemon();
  //     }
  //   }, [dispatch, fetchPokemon, selectedPokemon]);

  return (
    <div
      className={classNames(
        'GeneralLayout',
        'relative z-0 min-h-screen overflow-hidden',
        'bg-gray-100',
      )}
    >
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default GeneralLayout;
