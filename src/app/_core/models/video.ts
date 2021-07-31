export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  statistics?: VideoStats;
  meta?: {
    title: string;
    description: string;
    tags: string[];
    videoFile?: string;
    chaptersFile?: string;
  };
}

export interface VideoStats {
  viewCount: string | null;
  commentCount: string | null;
  likeCount: string | null;
  dislikeCount: string | null;
}
