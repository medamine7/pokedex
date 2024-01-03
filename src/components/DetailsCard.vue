<template>
  <x-card
    class="shadow-2xl shadow-black bg-gradient-to-b from-slate-100 to-slate-300 flex flex-col"
    :style="`background: radial-gradient(circle at 20% 0%, ${color} 46%, #ffffff 36%)`"
  >
    <div class="flex justify-between pt-3 px-3 items-center">
      <x-badge class="bg-white flex gap-2">
        <span class="text-neutral-800 text-[6px] font-bold capitalize">HP</span>
        <span class="text-xs font-bold">{{ item.stats.hp }}</span>
      </x-badge>

      <img :src="item.sprite" :alt="item.name" class="h-5" />
    </div>

    <div
      class="w-full flex-1 px-8 pb-6 pt-2 flex flex-col justify-start items-center"
    >
      <img class="w-64 mx-auto" :src="item.image" :alt="item.name" />
      <h4
        class="text-lg text-neutral-800 capitalize font-bold tracking-widest mt-2"
      >
        {{ item.name }}
      </h4>
      <x-badge
        class="mt-1"
        :style="{
          'background-color': color,
        }"
      >
        <span class="text-white text-[9px] capitalize">{{ item.type }}</span>
      </x-badge>

      <ul class="text-[8px] flex justify-between mt-auto w-full">
        <li class="flex text-neutral-800 flex-col gap-1">
          <h6 class="font-bold">{{ item.stats.attack }}</h6>
          <p class="text-neutral-600">Attack</p>
        </li>
        <li class="flex text-neutral-800 flex-col gap-1">
          <h6 class="font-bold">{{ item.stats.defense }}</h6>
          <p class="text-neutral-600">Defense</p>
        </li>
        <li class="flex text-neutral-800 flex-col gap-1">
          <h6 class="font-bold">{{ item.stats.speed }}</h6>
          <p class="text-neutral-600">Speed</p>
        </li>
      </ul>
    </div>
  </x-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import XCard from '~/components/XCard.vue'
import XBadge from '~/components/XBadge.vue'
import { Pokemon } from '~/types'
import { pokemonThemes } from '~/utils/colors'

interface Props {
  item: Pokemon
}

const props = defineProps<Props>()

const color = computed(() => {
  if (!props.item) return ''

  return pokemonThemes[props.item.type]
})
</script>