export interface Chapter {
  title: string;
  start: string;
  startInSeconds: number;
  end: string;
  endInSeconds: number;
  tags: string[];
}

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
    chapters?: Chapter[];
  };
}

export interface VideoStats {
  viewCount: string | null;
  commentCount: string | null;
  likeCount: string | null;
  dislikeCount: string | null;
}
