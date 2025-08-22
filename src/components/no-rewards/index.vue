<template>
  <div class="no-rewards">
    <img class="no-rewards__icon" src="@/assets/no-rewards.png" alt="no-rewards" />

    <div class="no-rewards__title">Вы пока не выиграли ни один подарок.</div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'NoRewards',
  })
</script>

<style scoped lang="scss">
  .no-rewards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    &__icon {
      height: 93px;
      width: auto;
    }

    &__title {
      font-family: 'Euclid Circular B', sans-serif;
      font-size: 24px;
      color: rgba(255, 255, 255, 1);
      max-width: 245px;
      text-align: center;
    }
  }
</style>
