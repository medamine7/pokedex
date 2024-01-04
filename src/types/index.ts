export interface Pokemon {
  name: string;
  image: string;
  sprite: string;
  stats: {
    attack: number;
    defense: number;
    hp: number;
    speed: number;
  }
  type: PokemonType;
  starred?: boolean;
}

export type PokemonType =
  | "bug"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "grass"
  | "ground"
  | "ghost"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "water";