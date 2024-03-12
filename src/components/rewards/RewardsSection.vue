<template>
  <section class="rewards">
    <div class="container">
      <div class="rewards__info">
        <p class="rewards__description">
          Only a truly sophisticated strategy can help your company succeed. Perfect balance is in
          utilizing marketing channels without creating informational noise.
        </p>

        <h2 class="title title--xl rewards__title">
          Quality approach to <span class="color-primary">growing your business</span>
        </h2>
      </div>

      <BaseLogoList border-color="var(--dark-color)" :list="list" />
    </div>
  </section>
</template>

<script setup>
import BaseLogoList from '@/components/base/BaseLogoList.vue'

const list = [
  { id: 1, img: 'rewards/Direct-Marketing.jpg' },
  { id: 2, img: 'rewards/Direct-Marketing.jpg' },
  { id: 3, img: 'rewards/Direct-Marketing.jpg' },
  { id: 4, img: 'rewards/Direct-Marketing.jpg' },
  { id: 5, img: 'rewards/Direct-Marketing.jpg' }
]
</script>

<style lang="scss" scoped>
.rewards {
  padding-top: 50px;

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 20px;

    margin-bottom: 100px;
  }

  &__title {
    font-size: 82px;
    max-width: 481px;
    text-align: right;
    margin-left: auto;
  }

  &__description {
    max-width: 438px;
  }
}
</style>
