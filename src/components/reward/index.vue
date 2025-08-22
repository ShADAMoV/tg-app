<template>
  <div
    class="reward"
    :class="{ 'reward--selected': isSelected }"
    @click="selectionMode && $emit('toggle')"
  >
    <img :src="image" alt="reward" />
    <div v-if="isSelected" class="reward__check">✓</div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'RewardComponent',
  })

  defineProps<{
    image: string
    isSelected?: boolean
    selectionMode?: boolean
  }>()

  defineEmits<{
    toggle: []
  }>()
</script>

<style scoped lang="scss">
  .reward {
    position: relative;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &--selected {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
      }
    }

    &__check {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 24px;
    }
  }
</style>
