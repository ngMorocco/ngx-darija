export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  statistics?: VideoStats;
}

export interface VideoStats {
  viewCount: string | null;
  commentCount: string | null;
  likeCount: string | null;
  dislikeCount: string | null;
}
