<template>
  <component class="h-4 w-4" :is="icon" />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

interface Props {
  name: 'star'
}

const props = defineProps<Props>()

const icon = defineAsyncComponent(
  () => import(`/src/assets/icons/${props.name}.svg`),
)
</script>
