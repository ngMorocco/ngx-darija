const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;
const VIDEOS_DIR = __dirname + '/../content/videos';
const GENERATED_DIR = __dirname + '/../content/generated';
const DB_DIR = __dirname + '/../functions/videos/generated';

const path = require('path');
const { mkdirpSync, writeJsonSync, writeFileSync } = require('fs-extra');

const { getPlaylist } = require('../lib/youtube-api');
const getVideoMetadata = require('../lib/video-metadata')(VIDEOS_DIR);

(async () => {
  // The only reason we get the full playlist is to get the full list of ids
  const playlist = await getPlaylist(YOUTUBE_PLAYLIST_ID);
  const videoIds = playlist.items.map(item => item.snippet.resourceId.videoId);
  const db = videoIds.map(videoId => ({
    videoId,
    metadata: getVideoMetadata(videoId)
  }));
  const routes = videoIds.reduce(
    (routes, videoId) => (routes += `/sessions/${videoId}\n`),
    ''
  );

  mkdirpSync(GENERATED_DIR);
  writeFileSync(path.resolve(GENERATED_DIR, 'routes.txt'), routes);

  mkdirpSync(DB_DIR);
  writeJsonSync(path.resolve(DB_DIR, 'db.json'), db);
})();
