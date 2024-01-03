import axios, { AxiosInstance } from 'axios'
import PokemonRepository from './modules/pokemon'

const getClient = (): AxiosInstance => {
  const apiBase = import.meta.env.VITE_API_BASE
  const timeout = 15 * 1000

  const client = axios.create({
    baseURL: apiBase,
    timeout,
  })

  return client
}

export const createRepository = () => {
  const client = getClient()

  return {
    pokemon: PokemonRepository(client),
  }
}
