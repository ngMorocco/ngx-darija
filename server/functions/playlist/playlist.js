const { getPlaylist } = require('../../lib/youtube-api');
const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;

exports.handler = async () => {
  try {
    const data = await getPlaylist(YOUTUBE_PLAYLIST_ID);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Error while getting data from YT'
    };
  }
};
