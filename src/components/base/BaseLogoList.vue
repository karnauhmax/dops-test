<template>
  <ul class="list">
    <BaseLogoItem :border-color="borderColor" v-for="{ id, img } in list" :img="img" :key="id" />
  </ul>
</template>

<script setup>
import BaseLogoItem from '@/components/base/BaseLogoItem.vue'

defineProps({
  list: {
    type: Array,
    required: true
  },

  borderColor: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.list {
  --columns: 5;

  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
}
</style>
