import { GetOneResponse } from "./types";

export default {
  getOne: (data: GetOneResponse) => {
    const type = data.types[0].type.name;

    return {
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      sprite: data.sprites.other.showdown.front_default,
      stats: {
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        hp: data.stats[0].base_stat,
        speed: data.stats[5].base_stat,
      },
      type
    }
  }
}