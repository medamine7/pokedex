<template>
  <x-card
    class="shadow-2xl shadow-black bg-gradient-to-b from-slate-100 to-slate-300 flex flex-col"
    :style="`background: radial-gradient(circle at 20% 0%, ${color} 46%, #ffffff 36%)`"
  >
    <div class="flex justify-between pt-3 px-3 items-center">
      <img :src="item.sprite" :alt="item.name" class="h-5" draggable="false" />

      <x-badge class="bg-white flex gap-2" data-role="hp-badge">
        <span class="text-neutral-800 text-[6px] font-bold capitalize">HP</span>
        <span class="text-xs font-bold">{{ item.stats.hp }}</span>
      </x-badge>

      <x-icon
        name="star"
        class="text-amber-400 cursor-pointer"
        @click="onStarred"
        :class="{
          'fill-current': item.starred,
        }"
      />
    </div>

    <div
      class="w-full flex-1 px-8 pb-6 pt-2 flex flex-col justify-start items-center"
    >
      <img
        class="w-64 mx-auto"
        :src="item.image"
        :alt="item.name"
        draggable="false"
      />
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
        data-role="type-badge"
      >
        <span class="text-white text-[9px] capitalize">{{ item.type }}</span>
      </x-badge>

      <ul class="text-[8px] flex justify-between mt-auto w-full">
        <li
          class="flex text-neutral-800 flex-col gap-1 items-center"
          v-for="(stat, index) in stats"
          :key="index"
        >
          <h6 class="font-bold">{{ stat.value }}</h6>
          <p class="text-neutral-600">{{ stat.name }}</p>
        </li>
      </ul>
    </div>
  </x-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import XCard from '~/components/XCard.vue'
import XBadge from '~/components/XBadge.vue'
import XIcon from '~/components/XIcon.vue'
import { Pokemon } from '~/types'
import { pokemonColors } from '~/utils/colors'

interface Props {
  item: Pokemon
}

const props = defineProps<Props>()
const emit = defineEmits<{
  starred: [value: Pokemon]
  unstarred: [value: Pokemon]
}>()

const stats = computed(() => {
  if (!props.item) return []

  const { attack, defense, speed } = props.item.stats

  return [
    {
      name: 'Attack',
      value: attack,
    },
    {
      name: 'Defense',
      value: defense,
    },
    {
      name: 'Speed',
      value: speed,
    },
  ]
})

const color = computed(() => {
  if (!props.item) return ''

  return pokemonColors[props.item.type]
})

const onStarred = () => {
  if (props.item.starred) emit('unstarred', props.item)
  else emit('starred', props.item)
}
</script>
