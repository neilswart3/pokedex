import { Stack } from '@/atoms';
import { getPokemonImgSrc } from '@/utils';
import Case from 'case';
import Image from 'next/image';

export default async function PokemonPage({
  params,
}: {
  params: { name: string };
}) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemonData = await data.json();

  const id = pokemonData.id;
  const src = getPokemonImgSrc(id);

  return (
    <>
      <Stack className="items-center gap-4 p-4">
        <h1 className="text-3xl font-bold">{Case.title(params.name)}</h1>

        <Image
          src={src.showdown}
          alt={pokemonData.name}
          width={100}
          height={100}
        />
      </Stack>
      <pre>{JSON.stringify(pokemonData, null, 2)}</pre>
    </>
  );
}
