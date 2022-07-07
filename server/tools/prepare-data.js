const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;
const VIDEOS_DIR = __dirname + '/../../content/videos';
const GENERATED_DIR = __dirname + '/../../content/generated';
const DB_DIR = __dirname + '/../functions/videos/generated';

const path = require('path');
const { mkdirpSync, writeJson, writeFile } = require('fs-extra');

const { getPlaylist, getVideo } = require('../lib/youtube-api');
const getVideoMetadata = require('../lib/video-metadata')(VIDEOS_DIR);
const indexSearch = require('../lib/index-db');

(async () => {
  const playlist = await getPlaylist(YOUTUBE_PLAYLIST_ID);
  const videoIds = playlist.items.map(item => item.snippet.resourceId.videoId);
  try {
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
      (routes, videoId) => (routes += `/playlist/${videoId}\n`),
      '/playlist/contribute\n'
    );
    mkdirpSync(GENERATED_DIR);
    writeFile(path.resolve(GENERATED_DIR, 'routes.txt'), routes, err => {
      if (err) return console.error(err);
      console.log('Preparing routes ✅');
    });

    mkdirpSync(DB_DIR);
    writeJson(path.resolve(DB_DIR, 'db.json'), db, err => {
      if (err) return console.error(err);
      console.log('Preparing database ✅');
    });

    indexSearch(db);
    console.log('Indexing database ✅');
  } catch {
    console.log('Guess what, it did not work ❌');
  }
})();
