import { CARD_COLORS } from '@/constants';
import { CardColorsItem, PokemonTypeItem } from '@/types';

export const getPokemonBgColor = (
  types: PokemonTypeItem[] | undefined,
): CardColorsItem => {
  if (!types?.length) return CARD_COLORS.default;

  const typeStrings = types.map(({ type }) => type.name);
  const type =
    typeStrings.includes('fairy') && typeStrings.indexOf('fairy') > 0
      ? 'fairy'
      : typeStrings?.at(0) || 'default';

  return CARD_COLORS[type as keyof typeof CARD_COLORS];
};
