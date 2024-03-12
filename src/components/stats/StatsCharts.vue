<template>
  <ul class="charts">
    <StatsSectionChart ref="charts" v-for="{ count, id } in stats" :key="id" :count="count" />
  </ul>
</template>

<script setup>
import StatsSectionChart from './StatsSectionChart.vue'
import { ref, onMounted } from 'vue'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const charts = ref(null)

gsap.registerPlugin(ScrollTrigger)

defineProps({
  stats: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  const progresses = charts.value.map((chart) => chart.progressRef)

  gsap.from(progresses, {
    height: 0,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.stats',
      start: 'top 35%',
      end: 'bottom bottom'
    }
  })
})
</script>

<style lang="scss" scoped>
.charts {
  display: flex;
  gap: 1px;
}
</style>
