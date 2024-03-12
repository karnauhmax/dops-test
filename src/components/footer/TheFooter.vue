<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <FooterHead />

        <FooterContent />
      </div>

      <FooterBottom />
    </div>
  </footer>
</template>

<script setup>
import FooterHead from './FooterHead.vue'
import FooterContent from './FooterContent.vue'
import FooterBottom from './FooterBottom.vue'
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 62px;
  padding-bottom: 20px;
  background-color: var(--dark-color);
  color: var(--primary-color);

  &__inner {
    display: grid;
    row-gap: 50px;
  }
}
</style>
