<template>
  <nav class="nav">
    <router-link
      v-for="navItem in navItems"
      :key="navItem.title"
      class="nav__item"
      :to="navItem.path"
    >
      <img :src="navItem.icon" :alt="navItem.title" class="nav__image" />
      <div class="nav__title">{{ navItem.title }}</div>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
  import prizeIcon from '@/assets/prize-icon.png'
  import slotMachineIcon from '@/assets/slot-machine-icon.png'
  import profileIcon from '@/assets/profile-icon.png'

  defineOptions({
    name: 'NavComponent',
  })

  const navItems = [
    {
      title: 'Мои подарки',
      icon: prizeIcon,
      path: '/rewards',
    },
    {
      title: 'Главная',
      icon: slotMachineIcon,
      path: '/',
    },
    {
      title: 'Профиль',
      icon: profileIcon,
      path: '/profile',
    },
  ]
</script>

<style scoped lang="scss">
  .nav {
    width: 100%;
    padding: 20px 45px 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 1);
    backdrop-filter: blur(500px);
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;

      &.router-link-active {
        .nav__title {
          background: linear-gradient(89.92deg, #01d9ff 0.06%, #0051ff 102.24%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #01d9ff;
        }
      }
    }

    &__image {
      width: 40px;
      height: 40px;

      & img {
        width: 100%;
        height: 100%;
      }
    }

    &__title {
      font-size: 14px;
      color: rgba(116, 116, 116, 1);
    }
  }
</style>
