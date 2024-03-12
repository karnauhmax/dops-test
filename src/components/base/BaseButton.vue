<template>
  <component :is="tag" :class="`btn primary-transition ${theme}`">
    <span class="btn__content">
      <svg
        width="22"
        height="13"
        viewBox="0 0 22 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="primary-transition"
          d="M21.1014 6.50097L15.3865 0.786133L12.5312 0.787547L17.2413 5.49759L0.900742 5.48839L0.898621 7.51425L17.2483 7.51284L12.5291 12.2137H15.3858L21.1014 6.50097Z"
          fill="#101820"
        />
      </svg>

      {{ label }}
    </span>
  </component>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },

  theme: {
    type: String,
    default: 'primary'
  },

  tag: {
    type: String,
    default: 'button'
  }
})
</script>

<style lang="scss" scoped>
.btn {
  padding-block: 13px;
  padding-inline: 18px;
  min-height: 50px;
  min-width: 235px;
  text-align: right;
  border: 1px solid;
  border-color: transparent;

  transition-property: background-color, color, border-color;

  path {
    transition-property: fill;
  }

  &__content {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 210px;
  }

  &.primary {
    background-color: var(--primary-color);
    color: var(--dark-color);

    path {
      fill: var(--dark-color);
    }

    @media (any-hover: hover) {
      &:hover {
        background-color: var(--dark-color);
        color: var(--primary-color);
        border-color: var(--primary-color);

        path {
          fill: var(--primary-color);
        }
      }
    }
  }

  &.dark {
    background-color: var(--dark-color);
    color: var(--primary-color);

    @media (any-hover: hover) {
      &:hover {
        background-color: var(--primary-color);
        color: var(--dark-color);
        border-color: var(--dark-color);

        path {
          fill: var(--dark-color);
        }
      }
    }

    path {
      fill: var(--primary-color);
    }
  }

  &.light {
    border: 1px solid var(--primary-color);
    background-color: var(--light-color);
    color: var(--primary-color);

    @media (any-hover: hover) {
      &:hover {
        background-color: var(--primary-color);
        color: var(--light-color);

        path {
          fill: var(--light-color);
        }
      }
    }

    path {
      fill: var(--primary-color);
    }
  }
}
</style>
