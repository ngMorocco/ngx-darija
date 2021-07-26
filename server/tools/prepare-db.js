const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;
const VIDEOS_DIR = __dirname + '/../content/videos';
const GENERATED_DIR = __dirname + '/../content/generated';
const DB_DIR = __dirname + '/../functions/videos/generated';

const path = require('path');
const { mkdirpSync, writeJsonSync, writeFileSync } = require('fs-extra');

const { getPlaylist, getVideo } = require('../lib/youtube-api');
const getVideoMetadata = require('../lib/video-metadata')(VIDEOS_DIR);
const indexSearch = require('../lib/index-db');

(async () => {
  const playlist = await getPlaylist(YOUTUBE_PLAYLIST_ID);
  const videoIds = playlist.items.map(item => item.snippet.resourceId.videoId);
  const db = await Promise.all(
    videoIds.map(async videoId => {
      const video = await getVideo(videoId);
      return {
        videoId,
        video,
        metadata: getVideoMetadata(videoId)
      };
    })
  );
  const routes = videoIds.reduce(
    (routes, videoId) => (routes += `/sessions/${videoId}\n`),
    ''
  );
  mkdirpSync(GENERATED_DIR);
  writeFileSync(path.resolve(GENERATED_DIR, 'routes.txt'), routes);

  mkdirpSync(DB_DIR);
  writeJsonSync(path.resolve(DB_DIR, 'db.json'), db);

  indexSearch(db);
})();
