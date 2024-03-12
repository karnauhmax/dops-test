<template>
  <li class="metric primary-transition items-center flex">
    <p>
      {{ title }}
    </p>
    <span>{{ value }}</span>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  value: {
    type: Number,
    required: true
  },

  icon: {
    type: String,
    required: true
  }
})

const icon = computed(() => {
  return `url("/img/${props.icon}.svg")`
})
</script>

<style lang="scss" scoped>
.metric {
  gap: 13px;
  transition-property: color;
  transition-delay: 0.1s;

  p {
    max-width: 144px;
  }

  span {
    position: relative;
    font-size: 50px;
    font-weight: 500;

    display: flex;
    gap: 3px;

    &::after {
      content: '';
      width: 12px;
      height: 21px;

      // width: v-bind(icon-size);

      transform: translateY(10px);
      background-repeat: no-repeat;
      background-size: contain;
      background-image: v-bind(icon);
    }
  }
}
</style>
