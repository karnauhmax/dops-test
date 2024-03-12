<template>
  <section class="partners">
    <div class="container">
      <div class="partners__info">
        <h2 class="partners__title title">Let's fight cold <span>together</span></h2>
        <p class="partners__description">We generated leads from top-performing companies</p>
      </div>

      <BaseLogoList :list="list" />
    </div>
  </section>
</template>

<script setup>
import BaseLogoList from '@/components/base/BaseLogoList.vue'
const list = [
  { id: 1, img: 'logos/sap.svg' },
  { id: 2, img: 'logos/bayer.svg' },
  { id: 3, img: 'logos/office365.svg' },
  { id: 4, img: 'logos/saleforce.svg' },
  { id: 5, img: 'logos/hp.svg' }
]
</script>

<style lang="scss" scoped>
.partners {
  padding-top: 156px;

  &__info {
    display: grid;
    row-gap: 66px;
    margin-bottom: 100px;
  }

  &__title {
    font-size: 82px;
    span {
      color: var(--primary-color);
    }
  }

  &__description {
    max-width: 273px;
  }
}
</style>
