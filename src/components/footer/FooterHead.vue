<template>
  <div class="head">
    <p class="head__note">Digital Marketing Agency</p>

    <div class="head__call">
      <h2 ref="title" class="head__title title title--xl">
        Still not sure what service to choose?
      </h2>
      <BaseButton label="Book a call" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'

import { onMounted, ref } from 'vue'
import { useAnimateText } from '@/composables/useAnimateText'

const title = ref(null)

onMounted(() => {
  useAnimateText({
    element: title.value,
    type: 'chars,words'
  })
})
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;

  &__note {
    max-width: 171px;
  }

  &__call {
    display: grid;
    justify-items: right;
    row-gap: 40px;
  }

  &__title {
    text-align: right;
    max-width: 566px;
  }
}
</style>
