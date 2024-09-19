'use client';

import { usePokemon } from '@/context';
import { PokemonListCard } from '@/components';

interface Props {}

export const PokemonList: React.FC<Props> = (props) => {
  const [{ data }] = usePokemon();

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-3">
        {data?.map((pokemonData) => (
          <PokemonListCard key={pokemonData.name} {...pokemonData} />
        ))}
      </div>
    </>
  );
};
