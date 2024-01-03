import { Pokemon, PokemonType } from '~/types'

export type GetAllResponse = {
  count: number
  next: string
  previous: string
  results: {
    name: string
    url: string
    image: string
  }[]
}

export type GetOneResponse = {
  name: string
  sprites: {
    other: {
      showdown: {
        front_default: string
      }
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
  types: {
    type: {
      name: PokemonType
    }
  }[]
}
