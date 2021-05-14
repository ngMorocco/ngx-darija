export interface YtVideoItem {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
}

export interface YtVideoStatistics {
  viewCount: string | null;
  commentCount: string | null;
  likeCount: string | null;
  dislikeCount: string | null;
}

export interface YtVideoDetail {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  statistics: YtVideoStatistics | null;
}

export interface HomeVideos {
  lastVideo: YtVideoItem;
  videoList: YtVideoItem[];
}