import { Card, CardHeader, Stack } from '@/atoms';
import { getPokemonId, getPokemonImgSrc } from '@/utils';
import Case from 'case';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  name: string;
  url: string;
}

export const PokemonListCard: React.FC<Props> = ({ name, url }) => {
  const id = getPokemonId(url);
  const src = getPokemonImgSrc(id);

  return (
    <Link href={`/${name}`} passHref>
      <Card as="a" className="bg-white rounded-full">
        <Stack flow="row" className="items-center gap-3">
          <div className="inline-flex items-center justify-center h-12 w-12">
            <span className="inline-flex items-center justify-center h-6 w-6">
              <Image
                className="m-h-full w-auto"
                src={src.icon}
                alt={name}
                height={100}
                width={100}
              />
            </span>
          </div>
          <CardHeader className="flex flex-1 gap-12 h-full">
            <span>#{`${1000 + parseInt(id)}`.slice(1)}</span>
            <span className="flex-1">{Case.title(name)}</span>
          </CardHeader>
        </Stack>
      </Card>
    </Link>
  );
};
