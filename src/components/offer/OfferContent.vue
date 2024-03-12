<template>
  <div class="content">
    <h2 ref="title" class="content__text title">Growing businesses by building relationships</h2>

    <p ref="note" class="content__note">B2B Marketing & LinkedIn Lead Generation agency</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAnimateText } from '@/composables/useAnimateText'

const title = ref(null)

const note = ref(null)

onMounted(() => {
  const settings = {
    element: title.value,
    trigger: '.offer'
  }

  useAnimateText(settings)
})
</script>

<style lang="scss" scoped>
.content {
  padding-block: 75px 30px;
  min-height: inherit;

  display: grid;

  &__text {
    font-size: 125px;
    text-align: right;
    max-width: 770px;
    line-height: 1;
    margin-left: auto;
  }

  &__note {
    margin-top: auto;
    max-width: 318px;
  }
}
</style>
