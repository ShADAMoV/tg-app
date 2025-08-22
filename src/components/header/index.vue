<template>
  <header class="header">
    <button v-if="historyButton" class="header__button">
      <img class="header__button-icon" src="@/assets/history.svg" alt="history" />

      История
    </button>

    <button v-if="settingsButton" class="header__button">
      <img class="header__button-icon" src="@/assets/settings.svg" alt="settings" />

      Настройки
    </button>

    <div class="header__counter">
      <div class="header__counter-circle"></div>
      <div class="header__counter-number">494 Онлайн</div>
    </div>

    <div v-if="withBalance" class="header__balance">
      <div class="header__stars">
        <div class="header__stars-count">
          <img src="@/assets/star.svg" alt="star" />

          0
        </div>

        <img class="header__stars-add" src="@/assets/plus.svg" alt="plus" />
      </div>

      <div class="header__ton">
        <div class="header__ton-count">
          <img src="@/assets/token-ton.svg" alt="token-ton" />

          0
        </div>

        <img class="header__ton-add" src="@/assets/plus.svg" alt="plus" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'headerComponent',
  })

  defineProps<{
    historyButton?: boolean
    settingsButton?: boolean
    withBalance?: boolean
  }>()
</script>

<style scoped lang="scss">
  .header {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 16px;
    height: 54px;

    &__button {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 12px 10px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50px;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
    }

    &__button-icon {
      width: 30px;
      height: 30px;
    }

    &__counter {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__counter-circle {
      width: 10px;
      height: 10px;
      background-color: rgba(68, 235, 86, 1);
      border-radius: 50%;
    }

    &__counter-number {
      font-size: 20px;
      color: rgba(251, 251, 251, 1);
    }

    &__balance {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__stars {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: rgba(245, 133, 21, 1);
    }

    &__stars-count,
    &__ton-count {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 18px;

      & img {
        width: 24px;
        height: 24px;
      }
    }

    &__stars-add,
    &__ton-add {
      width: 28px;
      height: 28px;
    }

    &__ton {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: rgba(21, 140, 245, 1);
    }
  }
</style>
