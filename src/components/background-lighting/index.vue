<template>
  <div class="lightning-wrapper">
    <div class="lightning lightning--top"></div>
    <div class="lightning lightning--bottom"></div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'BackgroundLightning',
  })
</script>

<style scoped lang="scss">
  .lightning-wrapper {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .lightning {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: 590px;
    height: 305px;
    background: radial-gradient(
      circle at center,
      rgba(46, 104, 129, 0.8) 0%,
      rgba(21, 140, 245, 0.4) 50%,
      rgba(255, 107, 223, 0) 100%
    );
    filter: blur(60px);
    opacity: 0.8;
    border-radius: 100%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(21, 140, 245, 0.3);
      filter: blur(80px);
      border-radius: inherit;
    }

    &--top {
      top: -152px;
    }

    &--bottom {
      bottom: -52px;
    }
  }
</style>
