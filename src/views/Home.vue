<template>
  <div class="mt-8 flex flex-col gap-8 pb-20 w-full max-w-7xl">
    <img src="/pokemon-logo.png" alt="Pokemon logo" class="w-64 m-auto" />

    <div class="justify-center w-full flex flex-wrap gap-8 mt-8">
      <preview-card
        v-for="(item, index) in items"
        class="hover:-translate-y-2 transition-transform duration-200"
        :item="item"
        :key="index"
        @click="selectCard(item, $event)"
        :class="{
          invisible: selected === item,
        }"
      />
    </div>

    <x-button @click="fetchData" class="max-w-28 m-auto">Load more</x-button>

    <div
      class="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-50"
      v-if="selected"
      @click.self="closeCard"
    >
      <div
        class="animated-card absolute top-0 left-0"
        :style="{
          transform: `translate(${selectedPosition?.left}px, ${selectedPosition?.top}px)`,
        }"
      >
        <preview-card :item="selected" class="backface-hidden" />
        <details-card
          v-if="selectedDetails"
          :item="selectedDetails"
          style="transform: rotateY(180deg)"
          class="backface-hidden absolute top-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import PreviewCard from '~/components/PreviewCard.vue'
import DetailsCard from '~/components/DetailsCard.vue'
import XButton from '~/components/XButton.vue'
import { injectStrict } from '~/utils/injection'
import { ApiKey } from '~/utils/symbols'
import { Pokemon } from '~/types'

interface Card {
  title: string
  color?: string
  image: {
    src: string
    alt: string
  }
}

const items = ref<Card[]>([])
const selected = ref<Card | null>(null)
const selectedDetails = ref<Pokemon | null>(null)
const selectedPosition = ref<{ top: number; left: number } | null>(null)
const offset = ref(0)
const limit = 20

const api = injectStrict(ApiKey)

const fetchData = () => {
  api.pokemon
    .getAll({
      limit,
      offset: offset.value,
    })
    .then((data) => {
      const parsed = data.results.map((item) => ({
        title: item.name,
        image: {
          src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            item.url.split('/')[6]
          }.svg`,
          alt: item.name,
        },
      }))

      items.value = [...items.value, ...parsed]

      offset.value += limit
    })
    .catch((error) => {
      console.error(error)
    })
}

const selectCard = (item: Card, event: MouseEvent) => {
  selected.value = null
  selectedPosition.value = null

  const position = (event.currentTarget as Element).getBoundingClientRect()

  nextTick(() => {
    selected.value = item
    selectedPosition.value = {
      top: position.top,
      left: position.left,
    }
  })

  api.pokemon.getOne(item.title).then((pokemon) => {
    selectedDetails.value = pokemon
  })
}

const closeCard = () => {
  selected.value = null
  selectedPosition.value = null
  selectedDetails.value = null
}

fetchData()
</script>

<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}

.animated-card {
  animation: card-reveal 0.5s ease-in-out forwards;
  transform-style: preserve-3d;
}

@keyframes card-reveal {
  100% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2.5) rotateY(180deg);
  }
}
</style>
