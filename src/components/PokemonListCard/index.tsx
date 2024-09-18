import { Card, CardHeader, CardSubHeader, Chip, Stack } from '@/atoms';
import { getPokemonId, getPokemonImgSrc } from '@/utils';
import Case from 'case';
import Link from 'next/link';
import { FetchOnScroll, PokemonImage } from '@/components';
import { PokemonListItem } from '@/context/PokemonContext/types';
import classNames from 'classnames';

interface Props extends PokemonListItem {}

export const PokemonListCard: React.FC<Props> = ({ name, url, types }) => {
  const id = getPokemonId(url);
  const src = getPokemonImgSrc(id);

  const mainType = types?.at(0)?.type?.name;
  const typeMap = {
    grass: 'bg-emerald-400 before:bg-emerald-400 after:bg-emerald-400',
    fire: 'bg-red-400 before:bg-red-400 after:bg-red-400',
    water: 'bg-sky-400 before:bg-sky-400 after:bg-sky-400',
    bug: 'bg-lime-400 before:bg-lime-400 after:bg-lime-400',
    normal: 'bg-gray-400 before:bg-gray-400 after:bg-gray-400',
    poison: 'bg-purple-600 before:bg-purple-600 after:bg-purple-600',
    ghost: 'bg-purple-600 before:bg-purple-600 after:bg-purple-600',
    electric: 'bg-yellow-400 before:bg-yellow-400 after:bg-yellow-400',
    ground: 'bg-orange-700 before:bg-orange-700 after:bg-orange-700',
    rock: 'bg-orange-700 before:bg-orange-700 after:bg-orange-700',
    fairy: 'bg-pink-400 before:bg-pink-400 after:bg-pink-400',
    fighting: 'bg-indigo-600 before:bg-indigo-600 after:bg-indigo-600',
    psychic: 'bg-pink-600 before:bg-pink-600 after:bg-pink-600',
    ice: 'bg-cyan-300 before:bg-cyan-300 after:bg-cyan-300',
    dragon: 'bg-teal-600 before:bg-teal-600 after:bg-teal-600',
  };

  const backgroundColor =
    mainType && typeMap[mainType as keyof typeof typeMap]
      ? typeMap[mainType as keyof typeof typeMap]
      : 'bg-gray-300';

  return (
    <Link href={`/${name}`} passHref>
      <Card
        className={classNames(
          'h-full p-4 rounded-3xl relative z-0 overflow-hidden',
          backgroundColor?.split(' ')?.at(0),
        )}
      >
        <FetchOnScroll name={name} url={url} />
        <Stack className="gap-2">
          <CardSubHeader className="text-right opacity-30">
            <strong>#{`${1000 + parseInt(id)}`.slice(1)}</strong>
          </CardSubHeader>
          <CardHeader className="text-2xl text-white">
            <strong>{Case.title(name)}</strong>
          </CardHeader>

          <Stack flow="row" className="justify-between gap-4">
            <Stack className="gap-2">
              {types?.map(({ type }) => (
                <Chip
                  key={`PokemonListCard__${name}--${type.name}`}
                  label={Case.title(type.name)}
                />
              ))}
            </Stack>
            <PokemonImage
              src={src.svg}
              alt={name}
              backdrop={[
                backgroundColor?.split(' ')?.at(1) as string,
                backgroundColor?.split(' ')?.at(2) as string,
              ]}
            />
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
};
