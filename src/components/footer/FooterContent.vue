<template>
  <div class="content grid grid-cols-12">
    <nav class="menu content__menu">
      <ul class="content__list content__list--menu">
        <li v-for="{ id, title, url } in footerList" :key="id">
          <a class="text-underline" :href="url">
            {{ title }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="content__socials">
      <p>Follow us:</p>

      <ul class="content__list content__socials-list">
        <li v-for="{ id, title, url } in socials" :key="id">
          <a class="text-underline" :href="url" target="_blank"> {{ title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const footerList = [
  {
    id: 1,
    title: `We're Hiring`,
    url: '#'
  },

  {
    id: 2,
    title: `Case Studies`,
    url: '#'
  },
  {
    id: 3,
    title: `About Studio`,
    url: '#'
  },

  {
    id: 4,
    title: `Contacts`,
    url: '#'
  },

  {
    id: 5,
    title: `Services`,
    url: '#'
  },

  {
    id: 6,
    title: `Blog`,
    url: '#'
  }
]

const socials = [
  {
    id: 1,
    title: 'Facebook',
    url: '#'
  },

  {
    id: 2,
    title: 'Instagram',
    url: '#'
  },

  {
    id: 3,
    title: 'Linkedin',
    url: '#'
  },

  {
    id: 4,
    title: 'Twitter',
    url: '#'
  }
]
</script>

<style lang="scss" scoped>
.content {
  row-gap: 75px;

  &__list {
    row-gap: 15px;
    display: grid;
  }

  &__menu {
    grid-column: 4/7;
  }

  &__socials {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 4/7;
    grid-row: 2/3;

    p {
      grid-column: 1/2;
    }

    &-list {
      grid-column: 3/4;
    }
  }

  &__list--menu {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min-content;
    align-items: start;

    li {
      grid-column: 3/4;

      &:first-child {
        grid-column: 1/2;
      }

      &:nth-child(2) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    }
  }
}
</style>
