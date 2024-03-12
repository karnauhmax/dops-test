<template>
  <div class="head">
    <img class="head__logo" src="@/assets/img/logo.svg" alt="Logo" />

    <ul class="head__list">
      <li v-for="{ id, title, url } in list1" :key="id">
        <a class="head__link" :href="url">
          {{ title }}
        </a>
      </li>
    </ul>

    <ul class="head__list">
      <li v-for="{ id, title, url } in list2" :key="id">
        <a class="head__link" :href="url">
          {{ title }}
        </a>
      </li>
    </ul>

    <BaseButton class="head__btn" theme="dark" label="Book a call" />
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'

const list1 = [
  {
    id: 1,
    title: 'Services',
    url: '#'
  },

  {
    id: 2,
    title: 'Case Studies',
    url: '#'
  },
  {
    id: 3,
    title: 'Blog',
    url: '#'
  },
  {
    id: 4,
    title: 'About us',
    url: '#'
  }
]

const list2 = [
  {
    id: 5,
    title: `We're hiring`,
    url: '#'
  },

  {
    id: 6,
    title: `Contacts`,
    url: '#'
  }
]
</script>

<style lang="scss" scoped>
.head {
  padding-block: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &__btn {
    width: 100%;
    max-width: 330px;

    @media screen and (max-width: 1600px) {
      max-width: 250px;
    }
  }

  &__logo {
    object-fit: contain;
  }

  &__list {
    display: flex;
    gap: 80px;

    @media screen and (max-width: 1600px) {
      gap: 60px;
    }
  }

  &__link {
    font-size: 22px;
    position: relative;
    padding-bottom: 3px;
    overflow: hidden;
    display: grid;

    @media (any-hover: hover) {
     &:hover {
       &::after {
        transform: translateX(0);
         
       }
     }
    }
    

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--dark-color);

      transition: transform var(--transition-duration) var(--transition-timing-function);

      transform: translateX(-100%);
    }
  }
}
</style>
