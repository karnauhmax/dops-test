<template>
  <ul>
    <StudiesItem
      v-for="{ id, appointments, emailOpenRate, title, tag } in list"
      :key="id"
      :appointments="appointments"
      :emailOpenRate="emailOpenRate"
      :title="title"
      :tag="tag"
    />
  </ul>
</template>

<script setup>
import StudiesItem from './StudiesItem.vue'

defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
