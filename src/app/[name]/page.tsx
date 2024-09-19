import { PokemonDetail } from '@/components';
import { PokemonRepository } from '@/services';
import { PokemonItemDataResponse } from '@/types';

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const data = await PokemonRepository.fetchPokemonItem(params.name);

  return <PokemonDetail data={data as PokemonItemDataResponse} />;
}
