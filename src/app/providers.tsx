import { PokemonProvider } from '@/context';
import { PokemonRepository } from '@/services';
import { PropsWithChildren } from 'react';

export async function Providers({ children }: PropsWithChildren) {
  const data = await PokemonRepository.fetchPokemonList();

  return <PokemonProvider value={data}>{children}</PokemonProvider>;
}
