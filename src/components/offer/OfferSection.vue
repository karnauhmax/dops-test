<template>
  <section ref="offer" class="offer">
    <div class="container">
      <OfferHead />
      <OfferContent />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import OfferHead from './OfferHead.vue'
import OfferContent from './OfferContent.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const offer = ref(null)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to(offer.value, {
    scrollTrigger: {
      // y: '-100%',
      trigger: '.offer',
      start: 'top 80%'
      // end: 'bottom bottom',
      // scrub: true
      // pin: true
      // pinSpacer: false
    }
  })
})
</script>

<style lang="scss" scoped>
.offer {
  background-color: var(--primary-color);
  min-height: 100vh;

  .container {
    min-height: inherit;
  }
}
</style>
