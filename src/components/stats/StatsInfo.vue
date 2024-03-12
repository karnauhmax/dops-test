<template>
  <ul ref="info" class="info">
    <StatsInfoItem
      ref="items"
      :class="{ active: isActive }"
      v-for="{ id, title, amount, size } in infoList"
      :title="title"
      :amount="amount"
      :key="id"
      :size="size"
    />
  </ul>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

import ScrollTrigger from 'gsap/ScrollTrigger'
import StatsInfoItem from './StatsInfoItem.vue'

gsap.registerPlugin(ScrollTrigger)

const items = ref(null)
const isActive = ref(false)

const infoList = [
  {
    id: 1,
    title: 'Revenue generated for clients',
    amount: 1570,
    size: 'lg'
  },

  {
    id: 2,
    title: 'Conversationd opened',
    amount: 1200,
    size: 'md'
  },

  {
    id: 3,
    title: 'Leads generated via targeted',
    amount: 378,
    size: 'lg'
  },

  {
    id: 4,
    title: 'Calls scheduled for clients',
    amount: 197,
    size: 'sm'
  }
]

onMounted(() => {
  const statsItems = items.value.map((el) => el.$el);

  gsap.from(statsItems, {
    opacity: 0,
    stagger: 0.1,

    scrollTrigger: {
      trigger: '.info',
      start: 'top 60%',
      end: 'bottom bottom',

      onEnter: () => {
        isActive.value = true
      }
    }
  })
})
</script>

<style lang="scss" scoped></style>
