<template>
  <div class="aspect-[2/3] w-auto max-w-52 h-80 rounded-lg overflow-hidden">
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  color?: string
}

defineProps<Props>()
</script>
