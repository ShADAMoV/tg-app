<template>
  <div class="main">
    <div class="main__top-lightning"></div>
    <feed-component></feed-component>
    <div class="main__bottom-lightning"></div>
  </div>
</template>

<script setup lang="ts">
import FeedComponent from "@/components/feed/index.vue";

defineOptions({
  name: 'MainPage'
})
</script>

<style scoped lang="scss">
.main {
  position: relative;
  background-color: rgba(0, 0, 0, 1);
  height: 100vh;
  overflow: hidden;
  padding-top: 20px;

  &__lightning-container {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0; // Контейнер для свечения будет под контентом
  }

  &__feed {
    position: relative;
    z-index: 1; // Контент будет поверх свечения
  }

  &__top-lightning {
    position: absolute;
    top: -152px;
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
  }

  &__bottom-lightning {
    position: absolute;
    bottom: -152px;
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
  }
}
</style>

