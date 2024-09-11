'use client';

import { usePokemon } from '@/context';
import { PokemonListCard } from '../PokemonListCard';
import { Stack } from '@/atoms';

interface Props {}

export const PokemonList: React.FC<Props> = (props) => {
  const [{ data }] = usePokemon();

  return (
    <Stack className="gap-3">
      {data?.results?.map(({ name, url }) => {
        return <PokemonListCard key={name} name={name} url={url} />;
      })}
    </Stack>
  );
};
