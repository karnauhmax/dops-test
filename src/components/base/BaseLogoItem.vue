<template>
  <li class="item">
    <img :src="`/dops-test/img/${img}`" alt="" />
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  img: {
    type: String
  },

  borderColor: {
    type: String,
    default: 'var(--primary-color)'
  }
})

const borderColor = computed(() => {
  return props.borderColor
})
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  place-items: center;
  height: 242px;

  border: 1px solid v-bind(borderColor);

  &:not(:last-child) {
    border-right: unset;
  }
}
</style>
