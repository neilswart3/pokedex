'use client';

import { usePokemon } from '@/context';
import { useCallback, useEffect, useRef } from 'react';

interface Props {
  url: string;
  name: string;
}

export const FetchOnScroll: React.FC<Props> = ({ name, url }) => {
  const ref = useRef<HTMLDivElement>(null);
  const init = useRef<boolean>(false);

  const [, { fetchPokemonItem }] = usePokemon();

  const handleScroll = useCallback(() => {
    const parentOffsetTop = ref.current?.parentElement?.offsetTop || 0;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    if (!init.current && scrollTop + windowHeight >= parentOffsetTop) {
      init.current = true;
      return fetchPokemonItem(name);
    }
  }, [fetchPokemonItem, name]);

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
