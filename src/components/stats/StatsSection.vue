<template>
  <section class="stats">
    <div class="container stats__inner">
      <StatsHead />
      <StatsCharts class="stats__charts" :stats="stats" />
      <StatsInfo />
    </div>
  </section>
</template>

<script setup>
import StatsHead from './StatsHead.vue'
import StatsCharts from './StatsCharts.vue'
import StatsInfo from './StatsInfo.vue'

const stats = [
  {
    id: 1,
    count: 27
  },

  {
    id: 2,
    count: 53
  },
  {
    id: 3,
    count: 61
  },
  {
    id: 1,
    count: 58
  },
  {
    id: 1,
    count: 30
  },
  {
    id: 1,
    count: 63
  },
  {
    id: 1,
    count: 55
  },
  {
    id: 1,
    count: 63
  },
  {
    id: 1,
    count: 71
  },

  {
    id: 1,
    count: 76
  },

  {
    id: 2,
    count: 67
  },
  {
    id: 3,
    count: 88
  },
  {
    id: 1,
    count: 78
  },
  {
    id: 1,
    count: 90
  }
]
</script>

<style lang="scss" scoped>
.stats {
  padding-top: 107px;

  &__inner {
    // display: grid;
    // grid-template-rows: auto 5fr;
  }
  // .container {
  //   min-height: inherit;
  // }

  &__charts {
    min-height: 700px;
  }
}
</style>
