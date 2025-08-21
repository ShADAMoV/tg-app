<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
#app {
  display: flex;
  justify-content: center;
}

.container {
  max-width: 590px;
  width: 100%;
}
</style>
