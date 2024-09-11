export const getPokemonId = (url: string): `${number}` =>
  url.split('/')?.filter(Boolean)?.at(-1) as `${number}`;
