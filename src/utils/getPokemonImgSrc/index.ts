const imageKeys = {
  svg: {
    path: 'other/dream-world',
    type: 'svg',
  },
  showdown: {
    path: 'other/showdown',
    type: 'gif',
  },
  icon: {
    path: 'versions/generation-vi/x-y',
    type: 'png',
  },
};

type GetPokemonImgSrcResult = Record<keyof typeof imageKeys, string>;

export const getPokemonImgSrc = (id: `${number}`): GetPokemonImgSrcResult => {
  const base =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  return Object.entries(imageKeys).reduce(
    (acc, [key, { path, type }]) => ({
      ...acc,
      [key]: `${[base, path, id].join('/')}.${type}`,
    }),
    {},
  ) as GetPokemonImgSrcResult;
};
