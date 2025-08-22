<template>
  <div class="reward-list">
    <div class="reward-list__content">
      <div class="reward-list__title">
        <div class="reward-list__prize-count">
          {{ rewards.length < 5 ? rewards.length + ' Подарка' : rewards.length + ' Подарков' }}
        </div>

        <div class="reward-list__prize-separator">|</div>

        <div class="reward-list__prize-price">
          {{ rewardsPrice }}
          <span>TON</span>
        </div>
      </div>

      <div class="reward-list__items">
        <reward-component
          v-for="reward in rewards"
          :key="reward.image"
          :image="reward.image"
          :is-selected="isRewardSelected(reward)"
          :selection-mode="selectionMode"
          class="reward-list__item"
          @toggle="toggleReward(reward)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  import RewardComponent from '@/components/reward/index.vue'

  import type { Reward } from '@/types/reward.interface.ts'

  defineOptions({
    name: 'RewardList',
  })

  const props = defineProps<{
    rewards: Reward[]
    selectionMode?: boolean
    selectedRewards: Reward[]
  }>()

  const emit = defineEmits<{
    'update:selectedRewards': [rewards: Reward[]]
  }>()

  const rewardsPrice = computed(() => {
    return props.rewards.reduce((acc, reward) => acc + reward.price, 0)
  })

  const isRewardSelected = (reward: Reward) => {
    return props.selectedRewards.some((r) => r.image === reward.image)
  }

  const toggleReward = (reward: Reward) => {
    if (!props.selectionMode) return

    const newSelected = isRewardSelected(reward)
      ? props.selectedRewards.filter((r) => r.image !== reward.image)
      : [...props.selectedRewards, reward]

    emit('update:selectedRewards', newSelected)
  }
</script>

<style scoped lang="scss">
  .reward-list {
    display: flex;
    justify-content: center;
    width: 100%;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-weight: 500;
      color: rgba(251, 251, 251, 1);
      border-top: 1px solid rgba(0, 174, 255, 1);
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      padding: 10px;
    }

    &__prize-separator {
      margin: 0 5px;
    }

    &__prize-price span {
      color: #0051ff;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      width: 100%;
      padding: 20px;
    }

    &__item {
      width: 100%;
    }
  }
</style>
