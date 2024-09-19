'use client';

import { Chip, Stack } from '@/atoms';
import { PokemonItemDataResponse } from '@/types';
import Case from 'case';
import { PokemonImage } from '@/components';
import { usePokemon } from '@/context';
import { useEffect, useRef } from 'react';
import { findPokemon } from '@/utils';

interface Props {
  data: PokemonItemDataResponse;
}

export const PokemonDetail: React.FC<Props> = ({ data: passedData }) => {
  const [{ data }, { updatePokemonItem }] = usePokemon();
  const init = useRef(false);

  const pokemon = {
    ...(findPokemon(data, passedData?.name) || {}),
    ...(passedData || {}),
  };
  const image = pokemon?.sprites?.other?.dream_world?.front_default;

  useEffect(() => {
    if (
      !init.current &&
      !Object.keys(findPokemon(data, passedData?.name) || {}).includes('id')
    ) {
      init.current = true;
      updatePokemonItem(passedData);
    }
  }, [data, passedData, updatePokemonItem]);

  if (!data) return null;

  return (
    <Stack className="gap-16">
      <Stack className="gap-4">
        <Stack flow="row" className="items-center justify-between gap-2">
          <h1 className="text-4xl text-white">
            <strong>{Case.title(pokemon.name)}</strong>
          </h1>
          <h4 className="text-xl text-white">
            <strong>#{`${1000 + pokemon.id}`.slice(1)}</strong>
          </h4>
        </Stack>

        {!!pokemon.types?.length && (
          <Stack flow="row" className="gap-2">
            {pokemon.types?.map(({ type }) => (
              <Chip
                key={`${pokemon.name}-${type.name}`}
                label={type.name}
                bgLight
                textLight
              />
            ))}
          </Stack>
        )}
      </Stack>

      <div className="flex justify-center">
        {image && (
          <PokemonImage
            src={image}
            alt={pokemon.name}
            height={200}
            width={200}
          />
        )}
      </div>
    </Stack>
  );
};
