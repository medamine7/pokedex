import { useAppStore, Toast } from '~/stores/app'
import { createPinia, setActivePinia } from 'pinia'

describe('App Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add a toast', () => {
    const store = useAppStore()
    const toast: Omit<Toast, 'id'> = {
      message: 'Test toast',
      type: 'success'
    }

    store.addToast(toast)

    expect(store.toasts).toHaveLength(1)
    expect(store.toasts[0]).toMatchObject({
      message: 'Test toast',
      type: 'success'
    })
  })

  it('should remove a toast', () => {
    const store = useAppStore()
    const toast: Omit<Toast, 'id'> = {
      message: 'Test toast',
      type: 'success'
    }

    store.addToast(toast)
    const toastId = store.toasts[0].id

    store.removeToast(toastId)

    expect(store.toasts).toHaveLength(0)
  })
})
