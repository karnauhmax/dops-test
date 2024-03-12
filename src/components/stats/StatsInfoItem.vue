<template>
  <li ref="item" :class="`item ${size}`">
    <div class="item__info primary-transition">
      <p class="item__title">{{ title }}</p>
     <span class="item__amount">{{ amount }}</span>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const item = ref(null)

defineExpose({ item })

defineProps({
  amount: {
    type: Number,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  size: {
    type: String,
    default: 'lg'
  }
})
</script>

<style lang="scss" scoped>
.item {
  color: var(--primary-color);
  padding-block: 16px;
  position: relative;
  overflow: hidden;

  &__info {
    display: flex;
    gap: 20px;
    align-items: start;

    transition-property: opacity;

    transition-delay: 5s;
  }

  &.active {
    &::before {
      transform: translateX(0);
    }

    .item__info {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: var(--dark-color);
    transition: transform 1s var(--transition-timing-function);

    transform: translateX(-100%);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--light-color);
  }

  &.lg {
    padding-right: 42px;
    
    .item__info {
      justify-content: flex-end;
    }
  }

  &.md {
    margin-left: auto;
    padding-left: 148px;
    max-width: 1115px;
  }

  &.sm {
    margin-left: auto;
    padding-left: 170px;
    max-width: 823px;

    .item__title {
      max-width: 180px;
    }
  }

  &__amount {
    font-size: 70px;
    font-weight: 500;
    line-height: 1;
  }

  &__title {
    text-align: right;
    max-width: 200px;
    padding-top: 3px;
  }
}
</style>
