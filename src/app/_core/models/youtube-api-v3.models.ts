/****************
 *  Official youtube API v3 models from:
 *  https://github.com/googleapis/google-api-nodejs-client/blob/master/src/apis/youtube/v3.ts
 ****************/

export interface PlaylistItemListResponse {
  etag?: string | null;
  /**
   * Serialized EventId of the request which produced this response.
   */
  eventId?: string | null;
  /**
   * A list of playlist items that match the request criteria.
   */
  items?: PlaylistItem[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#playlistItemListResponse&quot;&lt;/code&gt;. Etag of this resource.
   */
  kind?: string | null;
  /**
   * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
   */
  nextPageToken?: string | null;
  /**
   * General pagination information.
   */
  pageInfo?: PageInfo;
  /**
   * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
   */
  prevPageToken?: string | null;
  tokenPagination?: TokenPagination;
  /**
   * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
   */
  visitorId?: string | null;
}

/**
 * A &lt;code&gt;&lt;strong&gt;playlistItem&lt;/strong&gt;&lt;/code&gt; resource identifies another resource, such as a video, that is included in a playlist. In addition, the &lt;code&gt;playlistItem &lt;/code&gt; resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.&lt;br/&gt;&lt;br/&gt; YouTube uses playlists to identify special collections of videos for a channel, such as:   &lt;ul&gt;     &lt;li&gt;uploaded videos&lt;/li&gt;     &lt;li&gt;favorite videos&lt;/li&gt;     &lt;li&gt;positively rated (liked) videos&lt;/li&gt;     &lt;li&gt;watch history&lt;/li&gt;     &lt;li&gt;watch later&lt;/li&gt;   &lt;/ul&gt;  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company&#39;s videos, playlists, and other YouTube information. &lt;br/&gt;&lt;br/&gt;  You can retrieve the playlist IDs for each of these lists from the &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/channels\&quot;&gt;channel resource&lt;/a&gt; &lt;/code&gt; for a given channel. You can then use the &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/list\&quot;&gt; playlistItems.list&lt;/a&gt;&lt;/code&gt; method to retrieve any of those lists. You can also add or remove items from those lists by calling the &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/insert\&quot;&gt; playlistItems.insert&lt;/a&gt;&lt;/code&gt; and &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/delete\&quot;&gt; playlistItems.delete&lt;/a&gt;&lt;/code&gt; methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user&#39;s channel.
 */
export interface PlaylistItem {
  /**
   * The &lt;code&gt;contentDetails&lt;/code&gt; object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.
   */
  contentDetails?: PlaylistItemContentDetails;
  /**
   * Etag of this resource.
   */
  etag?: string | null;
  /**
   * The ID that YouTube uses to uniquely identify the playlist item.
   */
  id?: string | null;
  /**
   * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#playlistItem&quot;&lt;/code&gt;.
   */
  kind?: string | null;
  /**
   * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the playlist item, such as its title and position in the playlist.
   */
  snippet?: PlaylistItemSnippet;
  /**
   * The &lt;code&gt;status&lt;/code&gt; object contains information about the playlist item&#39;s privacy status.
   */
  status?: PlaylistItemStatus;
}

/**
 * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
 */
export interface PageInfo {
  /**
   * The number of results included in the API response.
   */
  resultsPerPage?: number | null;
  /**
   * The total number of results in the result set.
   */
  totalResults?: number | null;
}

/**
 * Stub token pagination template to suppress results.
 */
export interface TokenPagination {}

interface PlaylistItemContentDetails {
  /**
   * The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the &lt;code&gt;video.endTime&lt;/code&gt; is the end of the video.
   */
  endAt?: string | null;
  /**
   * A user-generated note for this item.
   */
  note?: string | null;
  /**
   * The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is &lt;code&gt;0&lt;/code&gt;.
   */
  startAt?: string | null;
  /**
   * The ID that YouTube uses to uniquely identify a video. To &lt;a href=&quot;/youtube/v3/docs/video/list.html&quot;&gt;retrieve the &lt;code&gt;video&lt;/code&gt; resource&lt;/a&gt;, set the &lt;code&gt;id&lt;/code&gt; query parameter to this value in your API request.
   */
  videoId?: string | null;
  /**
   * The date and time that the video was published to YouTube. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
   */
  videoPublishedAt?: string | null;
}

/**
 * Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 13
 */
export interface PlaylistItemSnippet {
  /**
   * The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
   */
  channelId?: string | null;
  /**
   * Channel title for the channel that the playlist item belongs to.
   */
  channelTitle?: string | null;
  /**
   * The item&#39;s description.
   */
  description?: string | null;
  /**
   * The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in.
   */
  playlistId?: string | null;
  /**
   * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of &lt;code&gt;0&lt;/code&gt;, the second item has a position of &lt;code&gt;1&lt;/code&gt;, and so forth.
   */
  position?: number | null;
  /**
   * The date and time that the item was added to the playlist. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
   */
  publishedAt?: string | null;
  /**
   * The &lt;code&gt;id&lt;/code&gt; object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.
   */
  resourceId?: ResourceId;
  /**
   * A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
   */
  thumbnails?: ThumbnailDetails;
  /**
   * The item&#39;s title.
   */
  title?: string | null;
}

/**
 * Internal representation of thumbnails for a YouTube resource.
 */
export interface ThumbnailDetails {
  /**
   * The default image for this resource.
   */
  default?: Thumbnail;
  /**
   * The high quality image for this resource.
   */
  high?: Thumbnail;
  /**
   * The maximum resolution quality image for this resource.
   */
  maxres?: Thumbnail;
  /**
   * The medium quality image for this resource.
   */
  medium?: Thumbnail;
  /**
   * The standard quality image for this resource.
   */
  standard?: Thumbnail;
}

/**
 * A thumbnail is an image representing a YouTube resource.
 */
export interface Thumbnail {
  /**
   * (Optional) Height of the thumbnail image.
   */
  height?: number | null;
  /**
   * The thumbnail image&#39;s URL.
   */
  url?: string | null;
  /**
   * (Optional) Width of the thumbnail image.
   */
  width?: number | null;
}

/**
 * A resource id is a generic reference that points to another YouTube resource.
 */
export interface ResourceId {
  /**
   * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#channel&lt;/code&gt;.
   */
  channelId?: string | null;
  /**
   * The type of the API resource.
   */
  kind?: string | null;
  /**
   * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#playlist&lt;/code&gt;.
   */
  playlistId?: string | null;
  /**
   * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#video&lt;/code&gt;.
   */
  videoId?: string | null;
}

/**
 * Information about the playlist item&#39;s privacy status.
 */
export interface PlaylistItemStatus {
  /**
   * This resource&#39;s privacy status.
   */
  privacyStatus?: string | null;
}
