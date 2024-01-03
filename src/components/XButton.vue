<template>
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex justify-center items-center gap-3"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup></script>
