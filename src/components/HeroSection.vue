<template>
  <section class="hero">
    <div class="container hero__inner">
      <BaseAnimatedLogo />

      <div class="hero__images">
        <img
          width="1920"
          height="869"
          class="hero__img"
          v-for="{ id, src } in teamImages"
          :key="id"
          :src="src"
          alt="Team"
        />
      </div>

      <p class="hero__note">Digital Marketing Agency</p>
    </div>
  </section>
</template>

<script setup>
import BaseAnimatedLogo from '@/components/base/BaseAnimatedLogo.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'

const teamImages = [
  {
    id: 1,
    src: '/img/team/team-1.jpg'
  },

  {
    id: 2,
    src: '/img/team/team-2.jpg'
  },

  {
    id: 3,
    src: '/img/team/team-3.jpg'
  },

  {
    id: 4,
    src: '/img/team/team-4.jpg'
  }
]

onMounted(() => {
  const PRELOADER_DELAY = 5200
  document.body.style.overflow = 'hidden'

  setTimeout(() => {
    gsap.to('.hero__img', {
      visibility: 'visible',
      stagger: 0.7,
      repeat: -1
    })

    gsap.from('.hero', {
      y: 150
    })
  }, PRELOADER_DELAY - 700)

  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
.hero {
  --offer-head-height: 87px;
  position: relative;
  min-height: calc(100svh - calc(var(--offer-head-height)));
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 20px;

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;

    visibility: hidden;

    &:first-child {
      visibility: visible;
    }
  }

  &__logo {
    position: relative;
    z-index: 3;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__note {
    text-align: right;
    color: var(--primary-color);
    max-width: 140px;
    margin-left: auto;
    text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.5);
    z-index: 1;
    font-size: 18px;
  }
}
</style>
