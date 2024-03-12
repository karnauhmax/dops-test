<template>
  <div class="info">
    <h2 class="title title--xl info__title">
      Our team of top talents has a perfect blend of data and creativity
    </h2>

    <p class="info__description">
      We've gathered experienced pros that thrive in the dynamic digital market. Growth and
      excellence are our fuel to provide commitment and deliver success.
    </p>

    <div class="info__actions">
      <BaseButton label="About Us" />
      <a class="color-primary text-underline" href="#"> Career Page </a>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
</script>

<style lang="scss" scoped>
.info {
  &__title {
    max-width: 788px;
    margin-bottom: 70px;
  }

  &__description {
    max-width: 422px;
    margin-bottom: 60px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 32px;
  }
}
</style>
