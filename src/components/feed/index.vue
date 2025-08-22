<template>
  <div class="feed-container">
    <div class="feed">
      <FeedItem
        v-for="feedItem in feedItems"
        :key="feedItem.username"
        :username="feedItem.username"
        :status="feedItem.status"
        :avatar="feedItem.avatar"
      />

      <FeedItem
        v-for="feedItem in feedItems"
        :key="`duplicate-${feedItem.username}`"
        :username="feedItem.username"
        :status="feedItem.status"
        :avatar="feedItem.avatar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import feedAvatar from '@/assets/feed-avatar.png'

  import FeedItem from '@/components/feed-item/index.vue'

  import type { Feed } from '@/types/feed.interface.ts'
  import { FeedStatus } from '@/types/feed-status.enum.ts'

  defineOptions({
    name: 'FeedComponent',
  })

  const feedItems: Feed[] = [
    {
      username: '@userName1',
      status: FeedStatus.WINNING,
      avatar: feedAvatar,
    },
    {
      username: '@userName2',
      status: FeedStatus.FAILED,
      avatar: feedAvatar,
    },
    {
      username: '@userName3',
      status: FeedStatus.FAILED,
      avatar: feedAvatar,
    },
    {
      username: '@veryLongUserName',
      status: FeedStatus.FAILED,
      avatar: feedAvatar,
    },
    {
      username: '@userName5',
      status: FeedStatus.FAILED,
      avatar: feedAvatar,
    },
    {
      username: '@userName7',
      status: FeedStatus.WINNING,
      avatar: feedAvatar,
    },
    {
      username: '@userName8',
      status: FeedStatus.FAILED,
      avatar: feedAvatar,
    },
    {
      username: '@userName9',
      status: FeedStatus.WINNING,
      avatar: feedAvatar,
    },
  ]
</script>

<style scoped lang="scss">
  .feed-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .feed {
    display: flex;
    gap: 10px;
    animation: scroll 30s linear infinite;
    will-change: transform;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .feed:hover {
    animation-play-state: paused;
  }
</style>
