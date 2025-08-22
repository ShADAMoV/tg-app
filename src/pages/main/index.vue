<template>
  <div class="main">
    <background-lightning />
    <feed-component />
    <nav-component />
  </div>
</template>

<script setup lang="ts">
  import FeedComponent from '@/components/feed/index.vue'
  import NavComponent from '@/components/nav/index.vue'
  import BackgroundLightning from '@/components/background-lighting/index.vue'

  defineOptions({
    name: 'MainPage',
  })
</script>

<style scoped lang="scss">
  .main {
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
