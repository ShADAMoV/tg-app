<template>
 <div :class="status === FeedStatus.WINNING ? 'feed-item active' : 'feed-item'">
   <img :src="avatar" alt="avatar" class="feed-item__avatar">

   <div class="feed-item__info">
     <div class="feed-item__username">{{ username }}</div>
     <div class="feed-item__status">{{ status }}</div>
   </div>

   <div class="feed-item__icon">🎰</div>
 </div>
</template>

<script setup lang="ts">
import { FeedStatus } from "@/types/feed-status.enum.ts";

defineOptions({name: 'FeedItem'})

defineProps<{
  username: string,
  status: FeedStatus,
  avatar: string,
}>()
</script>

<style scoped lang="scss">
.feed-item {
  position: relative;
  border-radius: 20px;
  min-width: 220px;
  max-width: 220px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.5);

  &.active {
    background-color: rgba(92, 255, 97, 0.3);
  }

  &__avatar {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 93px;
  }

  &__username {
     font-size: 16px;
     font-weight: 600;
     color: rgba(255, 255, 255, 0.5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__status {
     font-size: 16px;
     color: rgba(255, 255, 255, 0.7);
   }

  &__icon {
    font-size: 32px;
    font-weight: 600;
  }
}
</style>
