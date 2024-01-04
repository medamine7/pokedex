import { defineStore } from 'pinia'

export interface Toast {
  id: number
  message: string
  type: 'success' | 'warning'
}

interface AppStore {
  toasts: Toast[]
}

export const useAppStore = defineStore('app', {
  state: (): AppStore => ({
    toasts: []
  }),
  actions: {
    addToast(toast: Omit<Toast, 'id'>) {
      const id = Date.now()

      this.toasts.push({
        ...toast,
        id,
      })

      setTimeout(() => {
        this.removeToast(id)
      }, 2000)
    },
    removeToast(id: number) {
      this.toasts = this.toasts.filter((toast) => toast.id !== id)
    },
  },
})