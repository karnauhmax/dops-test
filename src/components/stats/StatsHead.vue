<template>
  <div class="head">
    <h2 ref="title" class="head__title title--xl">
      Consitent leads flow to streamline Your business growth.
    </h2>
    <p class="head__description">
      We combine disruptive marketing techniques with proven tech solutions to provide maximum
      business value.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimateText } from '@/composables/useAnimateText'
import { onMounted } from 'vue'

const title = ref(null)

onMounted(() => {
  useAnimateText({ element: title.value, trigger: '.stats' })
})
</script>

<style lang="scss" scoped>
.head {
  display: grid;
  row-gap: 58px;

  @media screen and (max-width: 1600px) {
    row-gap: 38px;
  }

  &__title {
    max-width: 1375px;
    font-weight: 400;
    line-height: 1;
  }

  &__description {
    max-width: 578px;
  }
}
</style>
