<template>
  <x-card
    class="border from-slate-700 to-slate-900 cursor-pointer"
    :class="{
      'border-amber-400 border-2': item.starred,
      'border-slate-400': !item.starred,
    }"
  >
    <div
      class="mb-2 bg-gradient-to-b w-full h-full border-4 border-slate-700 flex flex-col rounded-lg overflow-hidden p-6 flex-1 justify-between"
    >
      <div class="w-full max-w-40 overflow-hidden flex-1 flex items-center">
        <img
          v-if="item.image"
          :src="item.image.src"
          :alt="item.image.alt"
          referrerpolicy="no-referrer"
          class="w-full h-40 object-contain"
          draggable="false"
        />
      </div>
      <h4
        class="text-xl font-bold font-fun tracking-widest text-transparent bg-clip-text bg-gradient-to-br"
        :class="{
          'from-amber-200 to-amber-700': item.starred,
          'from-slate-200 to-slate-600': !item.starred,
        }"
      >
        {{ item.name }}
      </h4>
    </div>
  </x-card>
</template>

<script lang="ts" setup>
import XCard from '~/components/XCard.vue'

interface Props {
  item: {
    name: string
    starred?: boolean
    image: {
      src: string
      alt: string
    }
  }
}

defineProps<Props>()
</script>
