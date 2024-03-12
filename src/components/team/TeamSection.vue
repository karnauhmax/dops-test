<template>
  <section class="team">
    <div class="container">
      <div class="team__inner">
        <TeamInfo />

        <img width="1110" height="846" class="team__img" src="/img/team/team.jpg" alt="Team" />
      </div>
    </div>
  </section>
</template>

<script setup>
import TeamInfo from './TeamInfo.vue'
</script>

<style lang="scss" scoped>
.team {
  padding-block: 53px;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__img {
    align-self: start;
    max-width: 770px;
  }
}
</style>
