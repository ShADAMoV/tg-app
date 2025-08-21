<template>
  <div class="rewards">
    <background-lightning></background-lightning>
    <feed-component></feed-component>
    <nav-component></nav-component>
  </div>
</template>

<script setup lang="ts">
  import FeedComponent from '@/components/feed/index.vue'
  import BackgroundLightning from '@/components/background-lighting/index.vue'
  import NavComponent from '@/components/nav/index.vue'

  defineOptions({
    name: 'RewardsPage',
  })
</script>

<style scoped lang="scss">
  .rewards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background-color: rgba(0, 0, 0, 1);
    height: 100vh;
    overflow: hidden;
    padding-top: 20px;
  }
</style>
