<template>
  <div class="modal">
    <div class="modal__content">
      <h2 class="modal__title">
        Вы уверены что хотите вывести

        {{
          count === 1
            ? 'этот 1 подарок ?'
            : count < 5
              ? `эти ${count} подарка ?`
              : `эти ${count} подарков ?`
        }}
      </h2>

      <div class="modal__buttons">
        <button class="modal__button modal__button--confirm" @click="$emit('confirm')">Да</button>
        <button class="modal__button modal__button--cancel" @click="$emit('cancel')">Нет</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'WithdrawalModal',
  })

  defineProps<{
    count: number
  }>()
  defineEmits<{
    confirm: []
    cancel: []
  }>()
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    &__content {
      background: #1a1a1a;
      border-radius: 20px;
      padding: 30px;
      width: 90%;
      max-width: 400px;
      text-align: center;
    }

    &__title {
      color: #fff;
      font-size: 24px;
      margin-bottom: 40px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60px;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    &__button {
      width: 100%;
      padding: 16px;
      border-radius: 10px;
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      &--confirm {
        background: rgba(21, 140, 245, 1);
        color: #fff;
        border: none;
      }

      &--cancel {
        background: rgba(0, 0, 0, 0.3);
        border: none;
        color: #fff;
      }
    }
  }
</style>
