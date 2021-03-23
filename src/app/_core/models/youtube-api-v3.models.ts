/* eslint:ignore */
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

/**** Video resource ****/

export interface VideoListResponse {
  /**
   * Etag of this resource.
   */
  etag?: string | null;
  /**
   * Serialized EventId of the request which produced this response.
   */
  eventId?: string | null;
  items?: Video[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#videoListResponse&quot;&lt;/code&gt;.
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
  /**
   * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
   */
  visitorId?: string | null;
}

/**
 * A &lt;code&gt;&lt;strong&gt;video&lt;/strong&gt;&lt;/code&gt; resource represents a YouTube video.
 */
export interface Video {
  /**
   * Age restriction details related to a video. This data can only be retrieved by the video owner.
   */
  ageGating?: VideoAgeGating;
  /**
   * The &lt;code&gt;contentDetails&lt;/code&gt; object contains information about the video content, including the length of the video and its aspect ratio.
   */
  contentDetails?: VideoContentDetails;
  /**
   * Etag of this resource.
   */
  etag?: string | null;
  /**
   * The &lt;code&gt;fileDetails&lt;/code&gt; object encapsulates information about the video file that was uploaded to YouTube, including the file&#39;s resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.
   */
  fileDetails?: VideoFileDetails;
  /**
   * The ID that YouTube uses to uniquely identify the video.
   */
  id?: string | null;
  /**
   * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#video&quot;&lt;/code&gt;.
   */
  kind?: string | null;
  /**
   * The &lt;code&gt;liveStreamingDetails&lt;/code&gt; object contains metadata about a live video broadcast. The object will only be present in a &lt;code&gt;video&lt;/code&gt; resource if the video is an upcoming, live, or completed live broadcast.
   */
  liveStreamingDetails?: VideoLiveStreamingDetails;
  /**
   * The &lt;code&gt;localizations&lt;/code&gt; object contains localized versions of the basic details about the video, such as its title and description.
   */
  localizations?: { [key: string]: VideoLocalization } | null;
  /**
   * The &lt;code&gt;monetizationDetails&lt;/code&gt; object encapsulates information about the monetization status of the video.
   */
  monetizationDetails?: VideoMonetizationDetails;
  /**
   * The &lt;code&gt;player&lt;/code&gt; object contains information that you would use to play the video in an embedded player.
   */
  player?: VideoPlayer;
  /**
   * The &lt;code&gt;processingDetails&lt;/code&gt; object encapsulates information about YouTube&#39;s progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video.&lt;br&gt;&lt;br&gt; The &lt;code&gt;processingProgress&lt;/code&gt; object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.
   */
  processingDetails?: VideoProcessingDetails;
  /**
   * The &lt;code&gt;projectDetails&lt;/code&gt; object contains information about the project specific video metadata.
   */
  projectDetails?: VideoProjectDetails;
  /**
   * The &lt;code&gt;recordingDetails&lt;/code&gt; object encapsulates information about the location, date and address where the video was recorded.
   */
  recordingDetails?: VideoRecordingDetails;
  /**
   * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the video, such as its title, description, and category.
   */
  snippet?: VideoSnippet;
  /**
   * The &lt;code&gt;statistics&lt;/code&gt; object contains statistics about the video.
   */
  statistics?: VideoStatistics;
  /**
   * The &lt;code&gt;status&lt;/code&gt; object contains information about the video&#39;s uploading, processing, and privacy statuses.
   */
  status?: VideoStatus;
  /**
   * The &lt;code&gt;suggestions&lt;/code&gt; object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.
   */
  suggestions?: VideoSuggestions;
  /**
   * The &lt;code&gt;topicDetails&lt;/code&gt; object encapsulates information about &lt;a href=&quot;http://www.freebase.com&quot;&gt;Freebase&lt;/a&gt; topics associated with the video.
   */
  topicDetails?: VideoTopicDetails;
}

export interface VideoAgeGating {
  /**
   * Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.
   */
  alcoholContent?: boolean | null;
  /**
   * Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is &lt;code&gt;true&lt;/code&gt; the content is restricted to viewers aged 18+. Otherwise The field won&#39;t be present.
   */
  restricted?: boolean | null;
  /**
   * Video game rating, if any.
   */
  videoGameRating?: string | null;
}

/**
 * Details about the content of a YouTube Video.
 */
export interface VideoContentDetails {
  /**
   * The value of &lt;code&gt;captions&lt;/code&gt; indicates whether the video has captions or not.
   */
  caption?: string | null;
  /**
   * Specifies the ratings that the video received under various rating schemes.
   */
  contentRating?: ContentRating;
  /**
   * The &lt;code&gt;countryRestriction&lt;/code&gt; object contains information about the countries where a video is (or is not) viewable.
   */
  countryRestriction?: AccessPolicy;
  /**
   * The value of &lt;code&gt;definition&lt;/code&gt; indicates whether the video is available in high definition or only in standard definition.
   */
  definition?: string | null;
  /**
   * The value of &lt;code&gt;dimension&lt;/code&gt; indicates whether the video is available in 3D or in 2D.
   */
  dimension?: string | null;
  /**
   * The length of the video. The tag value is an &lt;a href=&quot;//en.wikipedia.org/wiki/ISO_8601#Durations&quot;&gt;ISO 8601&lt;/a&gt; duration in the format &lt;code&gt;PT#M#S&lt;/code&gt;, in which the letters &lt;code&gt;PT&lt;/code&gt; indicate that the value specifies a period of time, and the letters &lt;code&gt;M&lt;/code&gt; and &lt;code&gt;S&lt;/code&gt; refer to length in minutes and seconds, respectively. The &lt;code&gt;#&lt;/code&gt; characters preceding the &lt;code&gt;M&lt;/code&gt; and &lt;code&gt;S&lt;/code&gt; letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of &lt;code&gt;PT15M51S&lt;/code&gt; indicates that the video is 15 minutes and 51 seconds long.
   */
  duration?: string | null;
  /**
   * Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.
   */
  hasCustomThumbnail?: boolean | null;
  /**
   * The value of &lt;code&gt;is_license_content&lt;/code&gt; indicates whether the video is licensed content.
   */
  licensedContent?: boolean | null;
  /**
   * Specifies the projection format of the video.
   */
  projection?: string | null;
  /**
   * The &lt;code&gt;regionRestriction&lt;/code&gt; object contains information about the countries where a video is (or is not) viewable. The object will contain either the &lt;code&gt;contentDetails.regionRestriction.allowed&lt;/code&gt; property or the &lt;code&gt;contentDetails.regionRestriction.blocked&lt;/code&gt; property.
   */
  regionRestriction?: VideoContentDetailsRegionRestriction;
}

/**
 * Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange
 */
export interface ContentRating {
  /**
   * The video&#39;s Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children&#39;s television programming.
   */
  acbRating?: string | null;
  /**
   * The video&#39;s rating from Italy&#39;s Autorit&amp;agrave; per le Garanzie nelle Comunicazioni (AGCOM).
   */
  agcomRating?: string | null;
  /**
   * The video&#39;s Anatel (Asociaci&amp;oacute;n Nacional de Televisi&amp;oacute;n) rating for Chilean television.
   */
  anatelRating?: string | null;
  /**
   * The video&#39;s British Board of Film Classification (BBFC) rating.
   */
  bbfcRating?: string | null;
  /**
   * The video&#39;s rating from Thailand&#39;s Board of Film and Video Censors.
   */
  bfvcRating?: string | null;
  /**
   * The video&#39;s rating from the Austrian Board of Media Classification (Bundesministerium f&amp;uuml;r Unterricht, Kunst und Kultur).
   */
  bmukkRating?: string | null;
  /**
   * The video&#39;s rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the &lt;a href=&quot;http://www.cbsc.ca/english/agvot/frenchsystem.php&quot;&gt;Canadian Broadcast Standards Council&lt;/a&gt; website.
   */
  catvfrRating?: string | null;
  /**
   * Rating system for Canadian TV - Canadian TV Classification System The video&#39;s rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the &lt;a href=&quot;http://www.cbsc.ca/english/agvot/englishsystem.php&quot;&gt;Canadian Broadcast Standards Council&lt;/a&gt; website.
   */
  catvRating?: string | null;
  /**
   * The video&#39;s Central Board of Film Certification (CBFC - India) rating.
   */
  cbfcRating?: string | null;
  /**
   * The video&#39;s Consejo de Calificaci&amp;oacute;n Cinematogr&amp;aacute;fica (Chile) rating.
   */
  cccRating?: string | null;
  /**
   * The video&#39;s rating from Portugal&#39;s Comiss&amp;atilde;o de Classifica&amp;ccedil;&amp;atilde;o de Espect&amp;acute;culos.
   */
  cceRating?: string | null;
  /**
   * The video&#39;s rating in Switzerland.
   */
  chfilmRating?: string | null;
  /**
   * The video&#39;s Canadian Home Video Rating System (CHVRS) rating.
   */
  chvrsRating?: string | null;
  /**
   * The video&#39;s rating from the Commission de Contr&amp;ocirc;le des Films (Belgium).
   */
  cicfRating?: string | null;
  /**
   * The video&#39;s rating from Romania&#39;s CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).
   */
  cnaRating?: string | null;
  /**
   * Rating system in France - Commission de classification cinematographique
   */
  cncRating?: string | null;
  /**
   * The video&#39;s rating from France&#39;s Conseil sup&amp;eacute;rieur de l’audiovisuel, which rates broadcast content.
   */
  csaRating?: string | null;
  /**
   * The video&#39;s rating from Luxembourg&#39;s Commission de surveillance de la classification des films (CSCF).
   */
  cscfRating?: string | null;
  /**
   * The video&#39;s rating in the Czech Republic.
   */
  czfilmRating?: string | null;
  /**
   * The video&#39;s Departamento de Justi&amp;ccedil;a, Classifica&amp;ccedil;&amp;atilde;o, Qualifica&amp;ccedil;&amp;atilde;o e T&amp;iacute;tulos (DJCQT - Brazil) rating.
   */
  djctqRating?: string | null;
  /**
   * Reasons that explain why the video received its DJCQT (Brazil) rating.
   */
  djctqRatingReasons?: string[] | null;
  /**
   * Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism
   */
  ecbmctRating?: string | null;
  /**
   * The video&#39;s rating in Estonia.
   */
  eefilmRating?: string | null;
  /**
   * The video&#39;s rating in Egypt.
   */
  egfilmRating?: string | null;
  /**
   * The video&#39;s Eirin (&amp;#26144;&amp;#20523;) rating. Eirin is the Japanese rating system.
   */
  eirinRating?: string | null;
  /**
   * The video&#39;s rating from Malaysia&#39;s Film Censorship Board.
   */
  fcbmRating?: string | null;
  /**
   * The video&#39;s rating from Hong Kong&#39;s Office for Film, Newspaper and Article Administration.
   */
  fcoRating?: string | null;
  /**
   * &lt;span class=&quot;deprecated&quot;&gt;This property has been deprecated. Use the &lt;code&gt;&lt;a href=&quot;#contentDetails.contentRating.cncRating&quot;&gt;contentDetails.contentRating.cncRating&lt;/a&gt;&lt;/code&gt; instead.&lt;/span&gt;
   */
  fmocRating?: string | null;
  /**
   * The video&#39;s rating from South Africa&#39;s Film and Publication Board.
   */
  fpbRating?: string | null;
  /**
   * Reasons that explain why the video received its FPB (South Africa) rating.
   */
  fpbRatingReasons?: string[] | null;
  /**
   * The video&#39;s Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.
   */
  fskRating?: string | null;
  /**
   * The video&#39;s rating in Greece.
   */
  grfilmRating?: string | null;
  /**
   * The video&#39;s Instituto de la Cinematograf&amp;iacute;a y de las Artes Audiovisuales (ICAA - Spain) rating.
   */
  icaaRating?: string | null;
  /**
   * The video&#39;s Irish Film Classification Office (IFCO - Ireland) rating. See the &lt;a href=&quot;http://www.ifco.ie/website/ifco/ifcoweb.nsf/web/classcatintro&quot;&gt;IFCO&lt;/a&gt; website for more information.
   */
  ifcoRating?: string | null;
  /**
   * The video&#39;s rating in Israel.
   */
  ilfilmRating?: string | null;
  /**
   * The video&#39;s INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.
   */
  incaaRating?: string | null;
  /**
   * The video&#39;s rating from the Kenya Film Classification Board.
   */
  kfcbRating?: string | null;
  /**
   * The video&#39;s NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands).
   */
  kijkwijzerRating?: string | null;
  /**
   * The video&#39;s Korea Media Rating Board (&amp;#50689;&amp;#49345;&amp;#47932;&amp;#46321;&amp;#44553;&amp;#50948;&amp;#50896;&amp;#54924;) rating. The KMRB rates videos in South Korea.
   */
  kmrbRating?: string | null;
  /**
   * The video&#39;s rating from Indonesia&#39;s Lembaga Sensor Film.
   */
  lsfRating?: string | null;
  /**
   * The video&#39;s rating from Malta&#39;s Film Age-Classification Board.
   */
  mccaaRating?: string | null;
  /**
   * The video&#39;s rating from the Danish Film Institute&#39;s (Det Danske Filminstitut) Media Council for Children and Young People.
   */
  mccypRating?: string | null;
  /**
   * The video&#39;s rating system for Vietnam - MCST
   */
  mcstRating?: string | null;
  /**
   * The video&#39;s rating from Singapore&#39;s Media Development Authority (MDA) and, specifically, it&#39;s Board of Film Censors (BFC).
   */
  mdaRating?: string | null;
  /**
   * The video&#39;s rating from Medietilsynet, the Norwegian Media Authority.
   */
  medietilsynetRating?: string | null;
  /**
   * The video&#39;s rating from Finland&#39;s Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).
   */
  mekuRating?: string | null;
  /**
   * The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details.
   */
  menaMpaaRating?: string | null;
  /**
   * The video&#39;s rating from the Ministero dei Beni e delle Attivit&amp;agrave; Culturali e del Turismo (Italy).
   */
  mibacRating?: string | null;
  /**
   * The video&#39;s Ministerio de Cultura (Colombia) rating.
   */
  mocRating?: string | null;
  /**
   * The video&#39;s rating from Taiwan&#39;s Ministry of Culture (&amp;#25991;&amp;#21270;&amp;#37096;).
   */
  moctwRating?: string | null;
  /**
   * The video&#39;s Motion Picture Association of America (MPAA) rating.
   */
  mpaaRating?: string | null;
  /**
   * The rating system for trailer, DVD, and Ad in the US.  See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.
   */
  mpaatRating?: string | null;
  /**
   * The video&#39;s rating from the Movie and Television Review and Classification Board (Philippines).
   */
  mtrcbRating?: string | null;
  /**
   * The video&#39;s rating in Poland.
   */
  nbcplRating?: string | null;
  /**
   * The video&#39;s rating from the Maldives National Bureau of Classification.
   */
  nbcRating?: string | null;
  /**
   * The video&#39;s rating from the &lt;a href=&quot;http://www.nfc.bg/&quot;&gt;Bulgarian National Film Center&lt;/a&gt;.
   */
  nfrcRating?: string | null;
  /**
   * The video&#39;s rating from Nigeria&#39;s National Film and Video Censors Board.
   */
  nfvcbRating?: string | null;
  /**
   * The video&#39;s rating from the Nacion&amp;atilde;lais Kino centrs (National Film Centre of Latvia).
   */
  nkclvRating?: string | null;
  /**
   * The National Media Council ratings system for United Arab Emirates.
   */
  nmcRating?: string | null;
  /**
   * The video&#39;s Office of Film and Literature Classification (OFLC - New Zealand) rating.
   */
  oflcRating?: string | null;
  /**
   * The video&#39;s rating in Peru.
   */
  pefilmRating?: string | null;
  /**
   * The video&#39;s rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.
   */
  rcnofRating?: string | null;
  /**
   * The video&#39;s rating in Venezuela.
   */
  resorteviolenciaRating?: string | null;
  /**
   * The video&#39;s General Directorate of Radio, Television and Cinematography (Mexico) rating.
   */
  rtcRating?: string | null;
  /**
   * The video&#39;s rating from Ireland&#39;s Raidi&amp;oacute; Teilif&amp;iacute;s &amp;Eacute;ireann.
   */
  rteRating?: string | null;
  /**
   * The video&#39;s National Film Registry of the Russian Federation (MKRF - Russia) rating.
   */
  russiaRating?: string | null;
  /**
   * The video&#39;s rating in Slovakia.
   */
  skfilmRating?: string | null;
  /**
   * The video&#39;s rating in Iceland.
   */
  smaisRating?: string | null;
  /**
   * The video&#39;s rating from Statens medier&amp;aring;d (Sweden&#39;s National Media Council).
   */
  smsaRating?: string | null;
  /**
   * The video&#39;s TV Parental Guidelines (TVPG) rating.
   */
  tvpgRating?: string | null;
  /**
   * A rating that YouTube uses to identify age-restricted content.
   */
  ytRating?: string | null;
}

/**
 * Rights management policy for YouTube resources.
 */
export interface AccessPolicy {
  /**
   * The value of &lt;code&gt;allowed&lt;/code&gt; indicates whether the access to the policy is allowed or denied by default.
   */
  allowed?: boolean | null;
  /**
   * A list of region codes that identify countries where the default policy do not apply.
   */
  exception?: string[] | null;
}

/**
 * DEPRECATED Region restriction of the video.
 */
export interface VideoContentDetailsRegionRestriction {
  /**
   * A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.
   */
  allowed?: string[] | null;
  /**
   * A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.
   */
  blocked?: string[] | null;
}

/**
 * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
 */
export interface VideoFileDetails {
  /**
   * A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
   */
  audioStreams?: VideoFileDetailsAudioStream[];
  /**
   * The uploaded video file&#39;s combined (video and audio) bitrate in bits per second.
   */
  bitrateBps?: string | null;
  /**
   * The uploaded video file&#39;s container format.
   */
  container?: string | null;
  /**
   * The date and time when the uploaded video file was created. The value is specified in &lt;a href=&quot;http://www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format. Currently, the following ISO 8601 formats are supported: &lt;ul&gt; &lt;li&gt;Date only: &lt;code&gt;YYYY-MM-DD&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Naive time: &lt;code&gt;YYYY-MM-DDTHH:MM:SS&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Time with timezone: &lt;code&gt;YYYY-MM-DDTHH:MM:SS+HH:MM&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt;
   */
  creationTime?: string | null;
  /**
   * The length of the uploaded video in milliseconds.
   */
  durationMs?: string | null;
  /**
   * The uploaded file&#39;s name. This field is present whether a video file or another type of file was uploaded.
   */
  fileName?: string | null;
  /**
   * The uploaded file&#39;s size in bytes. This field is present whether a video file or another type of file was uploaded.
   */
  fileSize?: string | null;
  /**
   * The uploaded file&#39;s type as detected by YouTube&#39;s video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
   */
  fileType?: string | null;
  /**
   * A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
   */
  videoStreams?: VideoFileDetailsVideoStream[];
}

/**
 * Information about an audio stream.
 */
export interface VideoFileDetailsAudioStream {
  /**
   * The audio stream&#39;s bitrate, in bits per second.
   */
  bitrateBps?: string | null;
  /**
   * The number of audio channels that the stream contains.
   */
  channelCount?: number | null;
  /**
   * The audio codec that the stream uses.
   */
  codec?: string | null;
  /**
   * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
   */
  vendor?: string | null;
}

/**
 * Information about a video stream.
 */
export interface VideoFileDetailsVideoStream {
  /**
   * The video content&#39;s display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
   */
  aspectRatio?: number | null;
  /**
   * The video stream&#39;s bitrate, in bits per second.
   */
  bitrateBps?: string | null;
  /**
   * The video codec that the stream uses.
   */
  codec?: string | null;
  /**
   * The video stream&#39;s frame rate, in frames per second.
   */
  frameRateFps?: number | null;
  /**
   * The encoded video content&#39;s height in pixels.
   */
  heightPixels?: number | null;
  /**
   * The amount that YouTube needs to rotate the original source content to properly display the video.
   */
  rotation?: string | null;
  /**
   * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
   */
  vendor?: string | null;
  /**
   * The encoded video content&#39;s width in pixels. You can calculate the video&#39;s encoding aspect ratio as &lt;code&gt;width_pixels&lt;/code&gt;&amp;nbsp;/&amp;nbsp;&lt;code&gt;height_pixels&lt;/code&gt;.
   */
  widthPixels?: number | null;
}

/**
 * Details about the live streaming metadata.
 */
export interface VideoLiveStreamingDetails {
  /**
   * The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page.
   */
  activeLiveChatId?: string | null;
  /**
   * The time that the broadcast actually ended. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format. This value will not be available until the broadcast is over.
   */
  actualEndTime?: string | null;
  /**
   * The time that the broadcast actually started. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format. This value will not be available until the broadcast begins.
   */
  actualStartTime?: string | null;
  /**
   * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
   */
  concurrentViewers?: string | null;
  /**
   * The time that the broadcast is scheduled to end. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely.
   */
  scheduledEndTime?: string | null;
  /**
   * The time that the broadcast is scheduled to begin. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
   */
  scheduledStartTime?: string | null;
}

/**
 * Localized versions of certain video properties (e.g. title).
 */
export interface VideoLocalization {
  /**
   * Localized version of the video&#39;s description.
   */
  description?: string | null;
  /**
   * Localized version of the video&#39;s title.
   */
  title?: string | null;
}

/**
 * Details about monetization of a YouTube Video.
 */
export interface VideoMonetizationDetails {
  /**
   * The value of &lt;code&gt;access&lt;/code&gt; indicates whether the video can be monetized or not.
   */
  access?: AccessPolicy;
}

/**
 * Player to be used for a video playback.
 */
export interface VideoPlayer {
  embedHeight?: string | null;
  /**
   * An &lt;code&gt;&amp;lt;iframe&amp;gt;&lt;/code&gt; tag that embeds a player that will play the video.
   */
  embedHtml?: string | null;
  /**
   * The embed width
   */
  embedWidth?: string | null;
}

/**
 * Describes processing status and progress and availability of some other Video resource parts.
 */
export interface VideoProcessingDetails {
  /**
   * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the &lt;code&gt;suggestions&lt;/code&gt; part in your &lt;code&gt;videos.list()&lt;/code&gt; request.
   */
  editorSuggestionsAvailability?: string | null;
  /**
   * This value indicates whether file details are available for the uploaded video. You can retrieve a video&#39;s file details by requesting the &lt;code&gt;fileDetails&lt;/code&gt; part in your &lt;code&gt;videos.list()&lt;/code&gt; request.
   */
  fileDetailsAvailability?: string | null;
  /**
   * The reason that YouTube failed to process the video. This property will only have a value if the &lt;code&gt;processingStatus&lt;/code&gt; property&#39;s value is &lt;code&gt;failed&lt;/code&gt;.
   */
  processingFailureReason?: string | null;
  /**
   * This value indicates whether the video processing engine has generated suggestions that might improve YouTube&#39;s ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the &lt;code&gt;suggestions&lt;/code&gt; part in your &lt;code&gt;videos.list()&lt;/code&gt; request.
   */
  processingIssuesAvailability?: string | null;
  /**
   * The &lt;code&gt;processingProgress&lt;/code&gt; object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video&#39;s processing status is &lt;code&gt;processing&lt;/code&gt;.
   */
  processingProgress?: VideoProcessingDetailsProcessingProgress;
  /**
   * The video&#39;s processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
   */
  processingStatus?: string | null;
  /**
   * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video&#39;s metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the &lt;code&gt;suggestions&lt;/code&gt; part in your &lt;code&gt;videos.list()&lt;/code&gt; request.
   */
  tagSuggestionsAvailability?: string | null;
  /**
   * This value indicates whether thumbnail images have been generated for the video.
   */
  thumbnailsAvailability?: string | null;
}

/**
 * Video processing progress and completion time estimate.
 */
export interface VideoProcessingDetailsProcessingProgress {
  /**
   * The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating:&lt;br&gt; &lt;code&gt;100 * parts_processed / parts_total&lt;/code&gt;&lt;br&gt;&lt;br&gt; Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.
   */
  partsProcessed?: string | null;
  /**
   * An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.
   */
  partsTotal?: string | null;
  /**
   * An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.
   */
  timeLeftMs?: string | null;
}

/**
 * Project specific details about the content of a YouTube Video.
 */
export interface VideoProjectDetails {
  /**
   * A list of project tags associated with the video during the upload.
   */
  tags?: string[] | null;
}

/**
 * Recording information associated with the video.
 */
export interface VideoRecordingDetails {
  /**
   * The geolocation information associated with the video.
   */
  location?: GeoPoint;
  /**
   * The text description of the location where the video was recorded.
   */
  locationDescription?: string | null;
  /**
   * The date and time when the video was recorded. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; (&lt;code&gt;YYYY-MM-DDThh:mm:ss.sssZ&lt;/code&gt;) format.
   */
  recordingDate?: string | null;
}

/**
 * Geographical coordinates of a point, in WGS84.
 */
export interface GeoPoint {
  /**
   * Altitude above the reference ellipsoid, in meters.
   */
  altitude?: number | null;
  /**
   * Latitude in degrees.
   */
  latitude?: number | null;
  /**
   * Longitude in degrees.
   */
  longitude?: number | null;
}

/**
 * Basic details about a video, including title, description, uploader, thumbnails and category.
 */
export interface VideoSnippet {
  /**
   * The YouTube &lt;a href=&quot;/youtube/v3/docs/videoCategories/list&quot;&gt;video category&lt;/a&gt; associated with the video.
   */
  categoryId?: string | null;
  /**
   * The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
   */
  channelId?: string | null;
  /**
   * Channel title for the channel that the video belongs to.
   */
  channelTitle?: string | null;
  /**
   * The &lt;code&gt;default_audio_language&lt;/code&gt; property specifies the language spoken in the video&#39;s default audio track.
   */
  defaultAudioLanguage?: string | null;
  /**
   * The language of the videos&#39;s default snippet.
   */
  defaultLanguage?: string | null;
  /**
   * The video&#39;s description. @mutable youtube.videos.insert youtube.videos.update
   */
  description?: string | null;
  /**
   * Indicates if the video is an upcoming/active live broadcast. Or it&#39;s &quot;none&quot; if the video is not an upcoming/active live broadcast.
   */
  liveBroadcastContent?: string | null;
  /**
   * Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only)
   */
  localized?: VideoLocalization;
  /**
   * The date and time that the video was uploaded. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
   */
  publishedAt?: string | null;
  /**
   * A list of keyword tags associated with the video. Tags may contain spaces.
   */
  tags?: string[] | null;
  /**
   * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
   */
  thumbnails?: ThumbnailDetails;
  /**
   * The video&#39;s title. @mutable youtube.videos.insert youtube.videos.update
   */
  title?: string | null;
}

/**
 * Statistics about the video, such as the number of times the video was viewed or liked.
 */
export interface VideoStatistics {
  /**
   * The number of comments for the video.
   */
  commentCount?: string | null;
  /**
   * The number of users who have indicated that they disliked the video by giving it a negative rating.
   */
  dislikeCount?: string | null;
  /**
   * The number of users who currently have the video marked as a favorite video.
   */
  favoriteCount?: string | null;
  /**
   * The number of users who have indicated that they liked the video by giving it a positive rating.
   */
  likeCount?: string | null;
  /**
   * The number of times the video has been viewed.
   */
  viewCount?: string | null;
}

/**
 * Basic details about a video category, such as its localized title. Next Id: 16
 */
export interface VideoStatus {
  /**
   * This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update
   */
  embeddable?: boolean | null;
  /**
   * This value explains why a video failed to upload. This property is only present if the &lt;code&gt;uploadStatus&lt;/code&gt; property indicates that the upload failed.
   */
  failureReason?: string | null;
  /**
   * The video&#39;s license. @mutable youtube.videos.insert youtube.videos.update
   */
  license?: string | null;
  madeForKids?: boolean | null;
  /**
   * The video&#39;s privacy status.
   */
  privacyStatus?: string | null;
  /**
   * This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update
   */
  publicStatsViewable?: boolean | null;
  /**
   * The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
   */
  publishAt?: string | null;
  /**
   * This value explains why YouTube rejected an uploaded video. This property is only present if the &lt;code&gt;uploadStatus&lt;/code&gt; property indicates that the upload was rejected.
   */
  rejectionReason?: string | null;
  selfDeclaredMadeForKids?: boolean | null;
  /**
   * The status of the uploaded video.
   */
  uploadStatus?: string | null;
}

/**
 * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
 */
export interface VideoSuggestions {
  /**
   * A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
   */
  editorSuggestions?: string[] | null;
  /**
   * A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video&#39;s current &lt;a href=&quot;#processingProgress.processingStatus&quot;&gt;processing status&lt;/a&gt;, eventually, that status will almost certainly be &lt;code&gt;failed&lt;/code&gt;.
   */
  processingErrors?: string[] | null;
  /**
   * A list of suggestions that may improve YouTube&#39;s ability to process the video.
   */
  processingHints?: string[] | null;
  /**
   * A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.
   */
  processingWarnings?: string[] | null;
  /**
   * A list of keyword tags that could be added to the video&#39;s metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.
   */
  tagSuggestions?: VideoSuggestionsTagSuggestion[];
}

/**
 * A single tag suggestion with it&#39;s relevance information.
 */
export interface VideoSuggestionsTagSuggestion {
  /**
   * A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.
   */
  categoryRestricts?: string[] | null;
  /**
   * The keyword tag suggested for the video.
   */
  tag?: string | null;
}

/**
 * Freebase topic information related to the video.
 */
export interface VideoTopicDetails {
  /**
   * Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using &lt;a href=&quot;http://wiki.freebase.com/wiki/Topic_API&quot;&gt;Freebase Topic API&lt;/a&gt;.
   */
  relevantTopicIds?: string[] | null;
  /**
   * A list of Wikipedia URLs that provide a high-level description of the video&#39;s content.
   */
  topicCategories?: string[] | null;
  /**
   * A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the &lt; a href=&quot;http://wiki.freebase.com/wiki/Topic_API&quot;&gt;Freebase Topic API&lt;/a&gt;.
   */
  topicIds?: string[] | null;
}
