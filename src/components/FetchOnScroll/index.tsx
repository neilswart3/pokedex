'use client';

import { usePokemon } from '@/context';
import { useCallback, useEffect, useRef } from 'react';

interface Props {
  id: string | undefined;
  url: string;
  name: string;
}

export const FetchOnScroll: React.FC<Props> = ({ name, url, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const init = useRef<boolean>(false);

  const [, { fetchPokemonItem }] = usePokemon();

  console.log('id:', id, typeof id);

  const handleScroll = useCallback(() => {
    const parentOffsetTop = ref.current?.parentElement?.offsetTop || 0;
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    if (!id && !init.current && scrollTop + windowHeight >= parentOffsetTop) {
      init.current = true;
      return fetchPokemonItem(name);
    }
  }, [fetchPokemonItem, id, name]);

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
