<template>
  <section class="studies">
    <div class="container">
      <div class="studies__inner grid">
        <StudiesHead />

        <StudiesList :list="list" />
      </div>
    </div>
  </section>
</template>

<script setup>
import StudiesHead from './StudiesHead.vue'
import StudiesList from './StudiesList.vue'

const list = [
  {
    id: 1,
    title: `How to generate 40 SQLs
    in just 1 month in the
    Banking Industry`,
    emailOpenRate: 56,
    appointments: 14,
    tag: '#LinkedIn Lead Generation'
  },

  {
    id: 2,
    title: `How to generate 40 SQLs
    in just 1 month in the
    Banking Industry`,
    emailOpenRate: 49,
    appointments: 15,
    tag: '#LinkedIn Lead Generation'
  },

  {
    id: 3,
    title: `How to generate 40 SQLs
    in just 1 month in the
    Banking Industry`,
    emailOpenRate: 74,
    appointments: 13,
    tag: '#LinkedIn Lead Generation'
  },
]
</script>

<style lang="scss" scoped>
.studies {
  padding-top: 84px;

  &__inner {
    row-gap: 100px;
  }
}
</style>
