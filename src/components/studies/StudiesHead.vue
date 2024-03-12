<template>
  <div class="head grid grid-cols-12">
    <div class="head__naming grid">
      <h2 class="title head__title">Case studies</h2>
      <p class="color-primary">Gain efficiency you deserve</p>
    </div>

    <div class="head__info grid">
      <p>
        Only a truly sophisticated strategy can help your company succeed. Perfect balance is in
        utilizing marketing channels without creating informational noise.
      </p>

      <BaseButton label="All case studies" theme="light" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<style lang="scss" scoped>
.head {
  align-items: center;

  &__naming {
    grid-column: 1/4;
    row-gap: 42px;

    @media screen and (max-width: 1600px) {
      row-gap: 20px;
    }
  }

  &__info {
    justify-items: start;
    grid-column: 9/12;
    row-gap: 56px;

    @media screen and (max-width: 1600px) {
      row-gap: 36px;
    }
  }

  &__title {
    font-size: 135px;
    max-width: 431px;

    @media screen and (max-width: 1600px) {
      font-size: 95px;
    }
  }
}
</style>
