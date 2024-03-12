<template>
  <li class="item grid items-center grid-cols-12">
    <div class="item__info primary-transition grid">
      <div class="item__tags">
        <div class="item__tag primary-transition">{{ tag }}</div>
      </div>
      <h3 class="item__title title">
        {{ title }}
      </h3>
    </div>

    <div class="item__stats flex">
      <StudiesMetric icon="arrow" title="Appointments per month" :value="appointments" />

      <StudiesMetric icon="percent" title="Email open rate" :value="emailOpenRate" />
    </div>
  </li>
</template>

<script setup>
import StudiesMetric from './StudiesMetric.vue'

defineProps({
  title: {
    type: String,
    required: true
  },

  tag: {
    type: String,
    required: true
  },

  appointments: {
    type: Number,
    required: true
  },

  emailOpenRate: {
    type: Number,
    required: true
  },
})
</script>

<style lang="scss" scoped>
.item {
  padding-block: 100px 87px;
  border-top: 1px solid var(--dark-color);
  position: relative;
  overflow: hidden;
  transition-property: color;

  @media (any-hover: hover) {
    &:hover {
      .item__info {
        color: var(--light-color);
        transform: translateX(40px);
      }

      .item__tag {
        border-color: var(--light-color);
      }

      :deep(.metric) {
        color: var(--light-color);
      }

      &::after {
        transform: translateY(0);
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/img/studies-bg.jpg');
    z-index: -1;
    transform: translateY(-100%);
    transition: transform var(--transition-duration) var(--transition-timing-function);
  }

  &__tag {
    border: 1px solid;
    border-color: var(--primary-color);
    transition-property: border-color;
    transition-delay: 0.1s;
    padding: 5px 10px;
    text-align: center;

    width: fit-content;
  }

  &__title {
    font-size: 38px;
  }

  &__info {
    grid-column: 1/4;
    row-gap: 20px;

    transition-property: transform, color;
    transition-delay: 0.1s;
  }

  &__stats {
    grid-column: 8/12;

    gap: 84px;
  }
}
</style>
