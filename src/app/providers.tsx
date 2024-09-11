import { PokemonProvider } from '@/context';
import { PropsWithChildren } from 'react';

export async function Providers({ children }: PropsWithChildren) {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemonData = await data.json();

  return <PokemonProvider value={pokemonData}>{children}</PokemonProvider>;
}
