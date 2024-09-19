import { PokemonItemDataResponse, PokemonListDataResponse } from '@/types';

export class PokemonRepository {
  static async fetchPokemonList(): Promise<
    PokemonListDataResponse | undefined
  > {
    try {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      return await data.json();
    } catch (error) {
      console.log('error:', error);
      return undefined;
    }
  }

  static async fetchPokemonItem(
    name: string,
  ): Promise<PokemonItemDataResponse | undefined> {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return await data.json();
    } catch (error) {
      console.log('error:', error);
      return undefined;
    }
  }
}
