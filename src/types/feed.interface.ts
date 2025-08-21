import type { FeedStatus } from "@/types/feed-status.enum.ts";

export interface Feed {
  username: string
  status: FeedStatus
  avatar: string
}
