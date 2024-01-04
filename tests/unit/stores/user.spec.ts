import { useUserStore } from '~/stores/user'
import { createPinia, setActivePinia } from 'pinia'

describe('user store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('Should add a favorite', () => {
    const userStore = useUserStore()
    userStore.addFavorite('1')
    expect(userStore.favorites).toEqual(['1'])
  })

  test('Should remove a favorite', () => {
    const userStore = useUserStore()
    userStore.addFavorite('1')
    userStore.removeFavorite('1')
    expect(userStore.favorites).toEqual([])
  })
})