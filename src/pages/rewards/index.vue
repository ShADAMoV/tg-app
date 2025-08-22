<template>
  <div class="rewards">
    <background-lightning />
    <feed-component />
    <header-component class="rewards__header" />

    <div class="rewards__content">
      <div v-if="rewards.length">
        <reward-list
          :rewards="rewards"
          :selection-mode="isSelectionMode"
          v-model:selected-rewards="selectedRewards"
        />
      </div>

      <no-rewards v-else class="rewards__empty" />

      <button
        class="rewards__spin"
        :class="{ 'rewards__spin--selection': isSelectionMode }"
        @click="handleButtonClick"
      >
        <img
          v-if="!isSelectionMode"
          class="rewards__spin-icon"
          :src="rewards.length ? withdrawalIcon : slotMachineIcon"
          alt="slot-machine"
        />

        {{ buttonText }}
      </button>
    </div>

    <nav-component class="rewards__nav" />

    <withdrawal-modal
      v-if="showWithdrawalModal"
      :count="selectedRewards.length"
      @confirm="confirmWithdrawal"
      @cancel="cancelWithdrawal"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'

  import reward1 from '@/assets/reward1.png'
  import reward2 from '@/assets/reward2.png'
  import reward3 from '@/assets/reward3.png'
  import reward4 from '@/assets/reward4.png'
  import reward5 from '@/assets/reward5.png'
  import reward6 from '@/assets/reward6.png'
  import withdrawalIcon from '@/assets/withdrawal-icon.svg'
  import slotMachineIcon from '@/assets/slot-machine-icon.png'

  import FeedComponent from '@/components/feed/index.vue'
  import BackgroundLightning from '@/components/background-lighting/index.vue'
  import NavComponent from '@/components/nav/index.vue'
  import RewardList from '@/components/reward-list/index.vue'
  import NoRewards from '@/components/no-rewards/index.vue'
  import HeaderComponent from '@/components/header/index.vue'

  import WithdrawalModal from '@/modals/withdrawal/index.vue'

  import type { Reward } from '@/types/reward.interface.ts'

  defineOptions({
    name: 'RewardsPage',
  })

  const showWithdrawalModal = ref(false)

  const rewards: Reward[] = [
    {
      image: reward1,
      price: 1.5,
    },
    {
      image: reward2,
      price: 1.7,
    },
    {
      image: reward3,
      price: 2.1,
    },
    {
      image: reward4,
      price: 4.1,
    },
    {
      image: reward5,
      price: 7.2,
    },
    {
      image: reward6,
      price: 4.7,
    },
  ]

  const isSelectionMode = ref(false)
  const selectedRewards = ref<Reward[]>([])

  const buttonText = computed(() => {
    if (!rewards.length) return 'Начать крутить'
    if (!isSelectionMode.value) return 'Вывести подарки'
    if (selectedRewards.value.length === 0) return 'Выберите подарки'

    const count = selectedRewards.value.length
    const suffix = count === 1 ? 'подарок' : count < 5 ? 'подарка' : 'подарков'
    return `Вывести ${count} ${suffix}`
  })

  const handleButtonClick = () => {
    if (!rewards.length) return
    if (!isSelectionMode.value) {
      isSelectionMode.value = true
      selectedRewards.value = []
    } else if (selectedRewards.value.length > 0) {
      showWithdrawalModal.value = true
    }
  }

  const confirmWithdrawal = () => {
    console.log('Вывод подарков:', selectedRewards.value)
    showWithdrawalModal.value = false
    isSelectionMode.value = false
    selectedRewards.value = []
  }

  const cancelWithdrawal = () => {
    showWithdrawalModal.value = false
  }
</script>

<style scoped lang="scss">
  .rewards {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: rgba(0, 0, 0, 1);
    height: 100vh;
    overflow: hidden;
    padding-top: 20px;

    &__header {
      margin-top: 20px;
    }

    &__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 20px;
    }

    &__empty {
      margin-top: auto;
      margin-bottom: auto;
    }

    &__spin {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;
      background: linear-gradient(89.92deg, #01d9ff 0.06%, #0051ff 102.24%);
      font-weight: 500;
      font-size: 32px;
      padding: 30px 12px;
      color: rgba(255, 255, 255, 1);
      border-radius: 20px;
      margin-bottom: 40px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 84px;
        height: 84px;
        background-image: url('@/assets/prize-icon.svg');
        background-repeat: no-repeat;
        background-size: contain;
      }

      &::before {
        left: 0;
        border-bottom-left-radius: 20px;
      }

      &::after {
        right: 0;
        transform: scaleX(-1);
        border-bottom-left-radius: 20px;
      }

      &--selection {
        background: transparent;
        border: 2px rgba(1, 217, 255, 1) solid;
        border-radius: 20px;

        &::before,
        &::after {
          opacity: 0.3;
        }
      }
    }

    &__spin-icon {
      width: 40px;
      height: 40px;
    }

    &__nav {
      margin-top: auto;
    }
  }
</style>
