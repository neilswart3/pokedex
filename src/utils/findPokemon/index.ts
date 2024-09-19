import { PokemonListItem } from '@/types';

export const findPokemon = (
  data: PokemonListItem[] | null,
  name: string,
): PokemonListItem | undefined => {
  if (!data || !name) return undefined;

  return data?.find((item) => item.name === name);
};
