// const { readJsonSync } = require('fs-extra');
const { getPlaylist } = require('../../lib/youtube-api');
// const DB_FILE = __dirname + '/../videos/generated/db.json';
const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;

exports.handler = async event => {
  try {
    const playlistId = event.path.split('/').pop() || YOUTUBE_PLAYLIST_ID;
    const data = await getPlaylist(playlistId);
    if (data && !data.error) {
      try {
        // const db = readJsonSync(DB_FILE);
        data.items = data.items.map(ytVideo => {
          // let metadata =
          //   db.find(dbVideo => {
          //     return (
          //       dbVideo &&
          //       dbVideo.videoId.toLowerCase() ===
          //         ytVideo.snippet.resourceId.videoId.toLowerCase()
          //     );
          //   })?.metadata || undefined;
          ytVideo.snippet.title = ytVideo.snippet.title.replace(/-.*/, '');
          // return {
          //   ...ytVideo
          //   // meta: metadata
          // };
          return ytVideo;
        });
      } catch (e) {
        console.log('No cache available for playlist videos');
      }
      return {
        statusCode: 200,
        body: JSON.stringify(data.items)
      };
    }
    return {
      statusCode: data.error.code,
      body: data.error.message
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: 'Error while getting data from YT'
    };
  }
};
