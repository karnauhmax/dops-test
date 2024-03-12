<template>
  <li ref="item" class="item">
    <span ref="countRef">{{ count }}</span>
    <div ref="progressRef" class="item__progress"></div>
  </li>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'

const progressRef = ref(null)
const itemRef = ref(null)
const countRef = ref(null)

defineExpose({
  progressRef,
  countRef,
  itemRef
})

const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})

const { count } = toRefs(props)

const height = computed(() => {
  return `${count.value}%`
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  row-gap: 10px;

  flex-grow: 1;
  flex-basis: 133px;

  font-size: 15px;
  color: var(--primary-color);

  &__progress {
    content: '';
    width: 100%;
    height: v-bind(height);
    background-color: var(--primary-color);
  }
}
</style>
