'use client';

import { usePokemon } from '@/context';
import { PokemonActionType } from '@/context/PokemonContext/types';
import { useCallback, useEffect, useRef } from 'react';

interface Props {
  url: string;
  name: string;
}

export const FetchOnScroll: React.FC<Props> = ({ name, url }) => {
  const ref = useRef<HTMLDivElement>(null);
  const init = useRef<boolean>(false);

  const [, { dispatch }] = usePokemon();

  const handleFetchData = useCallback(async () => {
    try {
      const data = await fetch(url);
      const pokemonData = await data.json();

      dispatch({
        type: PokemonActionType.UPDATE_POKEMON,
        payload: { data: pokemonData },
      });
    } catch (error) {
      console.log('error:', error);
    }
  }, [dispatch, url]);

  const handleScroll = useCallback(() => {
    const parentOffsetTop = ref.current?.parentElement?.offsetTop || 0;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    if (!init.current && scrollTop + windowHeight >= parentOffsetTop) {
      init.current = true;
      return handleFetchData();
    }
  }, [handleFetchData]);

  useEffect(() => {
    if (init.current) return;

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, init]);

  return <div ref={ref} className="absolute" />;
};
