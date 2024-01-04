<template>
  <div class="min-w-full min-h-screen antialiased bg-slate-900 text-center">
    <router-view />
  </div>

  <transition-group
    tag="div"
    class="min-h-150 flex flex-col gap-2 items-end fixed right-5 bottom-5 z-50"
    name="toast"
  >
    <x-toast
      :key="toast.id"
      v-for="toast in toasts"
      :message="toast.message"
      :type="toast.type"
    />
  </transition-group>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import XToast from '~/components/XToast.vue'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const toasts = computed(() => appStore.toasts)
</script>

<style scope>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
