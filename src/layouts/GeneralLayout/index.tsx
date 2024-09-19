'use client';

import { Header } from '@/components';
import { CARD_COLORS } from '@/constants';
import { usePokemon } from '@/context';
import { findPokemon, getPokemonBgColor } from '@/utils';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const GeneralLayout: React.FC<Props> = ({ children }) => {
  const params = useParams<{ name: string }>();

  const [{ data }] = usePokemon();
  const pokemon = findPokemon(data, params?.name);

  const bgColor = params?.name
    ? getPokemonBgColor(pokemon?.types || [])
    : CARD_COLORS.gray;

  return (
    <div
      className={classNames(
        'GeneralLayout',
        'relative z-0 min-h-screen overflow-hidden',
        bgColor.main.root,
      )}
    >
      <Header colors={bgColor} light={!!params?.name} />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default GeneralLayout;
