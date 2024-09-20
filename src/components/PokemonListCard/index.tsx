import { Card, CardHeader, CardSubHeader, Chip, Stack } from '@/atoms';
import { getPokemonBgColor, getPokemonId, getPokemonImgSrc } from '@/utils';
import Case from 'case';
import Link from 'next/link';
import { FetchOnScroll, PokemonImage } from '@/components';
import classNames from 'classnames';
import { PokemonListItem } from '@/types';

interface Props extends PokemonListItem {}

export const PokemonListCard: React.FC<Props> = ({
  name,
  url,
  types,
  id: passedId,
}) => {
  const id = passedId ?? getPokemonId(url);
  const src = getPokemonImgSrc(id);

  const backgroundColor = getPokemonBgColor(types || []);

  return (
    <Link href={`/${name}`} passHref>
      <Card
        rounded
        className={classNames(
          'h-full p-4 relative z-0 overflow-hidden',
          backgroundColor.main.root,
        )}
      >
        <FetchOnScroll id={passedId && `${passedId}`} name={name} url={url} />
        <Stack className="gap-2">
          <CardSubHeader className="text-right opacity-30">
            <strong>#{`${1000 + parseInt(`${id}`)}`.slice(1)}</strong>
          </CardSubHeader>
          <CardHeader className="text-2xl text-white">
            <strong>{Case.title(name)}</strong>
          </CardHeader>

          <Stack flow="row" className="justify-between gap-4">
            <Stack className="gap-2">
              {types?.map(({ type }) => (
                <Chip
                  key={`PokemonListCard__${name}--${type.name}`}
                  bgLight
                  textLight
                  label={Case.title(type.name)}
                />
              ))}
            </Stack>
            <PokemonImage
              src={src.svg}
              alt={name}
              backdrop={[
                backgroundColor.light.before,
                backgroundColor.light.after,
              ]}
            />
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
};
