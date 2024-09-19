interface NameUrl {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
}

export type PokemonForm = NameUrl;

export interface PokemonGameIndex {
  game_index: number;
  version: NameUrl;
}

export type PokemonMove = NameUrl;

export interface PokemonMoveVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NameUrl;
  version_group: NameUrl;
}

export interface PokemonMoveItem {
  move: PokemonMove;
  version_group_details: PokemonMoveVersionGroupDetail[];
}

export type PokemonSpecies = NameUrl;

export type PokemonSpriteKey =
  `${'front' | 'back'}_${'default' | 'female' | 'shiny' | 'shiny_female'}`;
export type PokemonSpriteOtherKey =
  | 'dream_world'
  | 'home'
  | 'official-artwork'
  | 'showdown';

export type PokemonMainSprites = Record<PokemonSpriteKey, string | null>;

export type PokemonSprites = PokemonMainSprites & {
  other: {
    [key in PokemonSpriteOtherKey]: Partial<PokemonMainSprites>;
  };
};

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NameUrl;
}

export type PokemonType = NameUrl;

export interface PokemonTypeItem {
  slot: `${number}`;
  type: PokemonType;
}

export interface PokemonItemDataResponse {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: PokemonForm[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMoveItem[];
  name: string;
  order: number;
  past_abilities: unknown[];
  past_types: unknown[];
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonTypeItem[];
  weight: number;
}

export interface PokemonListItem {
  name: string;
  url: string;
  types?: PokemonTypeItem[];
}

export interface PokemonListMeta {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface PokemonListDataResponse extends PokemonListMeta {
  results: PokemonListItem[];
}
