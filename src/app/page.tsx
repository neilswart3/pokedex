'use client';

import { Box, Card, CardHeader, Heading, Image, Stack } from '@chakra-ui/react';
import Case from 'case';
import Link from 'next/link';
import { useCallback, useEffect, useReducer } from 'react';

enum PokemonActionType {
  Fetch_Complete = 'Fetch_Complete',
  Fetch_Loading = 'Fetch_Loading',
}

interface PokemonAction {
  type: PokemonActionType;
  payload: any;
}

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonState {
  init: boolean;
  data: null | PokemonListItem[];
  loading: boolean;
  error: null | string;
}

const initPokemonState = {
  init: false,
  data: null,
  loading: false,
  error: null,
};

const getId = (url: string) => url.split('/').filter(Boolean).at(-1) as string;

const getImageSrc = (url: string) => {
  const id = getId(url);
  const base =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  const applyUrl = (
    path: string,
    id: string,
    type: 'jpg' | 'gif' | 'svg' | 'png'
  ) => `${base}/${path}/${id}.${type}`;

  return {
    svg: applyUrl('other/dream-world', id, 'svg'),
    showdown: applyUrl('other/showdown', id, 'gif'),
    icon: applyUrl('versions/generation-vi/x-y', id, 'png'),
  };
};

const pokemonReducer = (
  state: PokemonState,
  { payload, type }: PokemonAction
) => {
  switch (type) {
    case PokemonActionType.Fetch_Complete:
      return {
        ...state,
        loading: false,
        data: payload.results,
      };

    case PokemonActionType.Fetch_Loading:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default function Home() {
  const [{ init, data, loading, error }, dispatch] = useReducer(
    pokemonReducer,
    initPokemonState
  );

  const handleFetchPokemon = useCallback(async () => {
    try {
      dispatch({ payload: '', type: PokemonActionType.Fetch_Loading });

      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      const data = await response.json();

      dispatch({ payload: data, type: PokemonActionType.Fetch_Complete });
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (!data && !loading && !error) handleFetchPokemon();
  }, [data, error, handleFetchPokemon, loading]);

  return (
    <Stack gap={3} p={8} backgroundColor="#F0F0F5">
      {data?.length &&
        data?.map(({ name, url }: PokemonListItem) => (
          <Card
            as={Link}
            href={`/${getId(url)}`}
            key={name}
            position="relative"
            borderRadius="full"
            _hover={{
              backgroundColor: 'red.500',
              color: 'white',
            }}
          >
            <Stack flexDir="row" alignItems="center" gap={3}>
              <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="42px"
                h="42px"
              >
                <Box
                  as="span"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  h={6}
                  w={6}
                >
                  <Image
                    src={getImageSrc(url).icon}
                    alt={name}
                    maxH="100%"
                    w="auto"
                  />
                </Box>
              </Box>
              <CardHeader display="flex" flex={1} gap={12} h="100%" p={0}>
                <span>#{`${1000 + parseInt(getId(url))}`.slice(1)}</span>
                <span>{Case.title(name)}</span>
              </CardHeader>
            </Stack>
          </Card>
        ))}
    </Stack>
  );

  //   return (
  //     <Box
  //       p={6}
  //       display="grid"
  //       gridTemplateColumns="repeat(auto-fit, minmax(10rem, 1fr))"
  //       gap={6}
  //     >
  //       {/* {data?.length &&
  //         data?.map(({ name, url }: PokemonListItem) => (
  //           <Box
  //             key={name}
  //             position="relative"
  //             display="flex"
  //             flexDir="column"
  //             justifyContent="flex-end"
  //             p={6}
  //           >
  //             <Card
  //               position="absolute"
  //               left={0}
  //               bottom={0}
  //               h="50%"
  //               w="100%"
  //               p={6}
  //             />
  //             <Stack
  //               position="relative"
  //               alignItems="center"
  //               justifyContent="end"
  //               gap={6}
  //             >
  //               <Image
  //                 src={getImageSrc(url).svg}
  //                 alt={name}
  //                 maxH="100%"
  //                 w="auto"
  //               />
  //               <Heading
  //                 display="flex"
  //                 justifyContent="space-between"
  //                 as="h4"
  //                 size="md"
  //                 w="100%"
  //                 gap={4}
  //                 p={0}
  //               >
  //                 <span>#{getId(url)}</span>
  //                 <span>{Case.title(name)}</span>
  //               </Heading>
  //             </Stack>
  //           </Box>
  //         ))} */}
  //     </Box>
  //   );
}
