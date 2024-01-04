<template>
  <div class="p-4 text-white rounded-xl shadow-lg z-50" :class="classes">
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  message: string
  type: 'success' | 'warning'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'success',
})

const classes = computed(() => {
  return {
    'bg-green-500': props.type === 'success',
    'bg-amber-500': props.type === 'warning',
  }
})
</script>
