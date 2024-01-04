import { defineStore } from 'pinia'

interface UserStore {
  favorites: string[];
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    favorites: [],
  }),
  actions: {
    addFavorite(id: string) {
      this.favorites.push(id)
    },
    removeFavorite(id: string) {
      this.favorites = this.favorites.filter((i) => i !== id)
    },
  },
  persist: true,
})