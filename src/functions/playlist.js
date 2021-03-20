const { getPlaylist, PLAYLIST_ID } = require('./utils/youtube-api');

exports.handler = async () => {
  try {
    const data = await getPlaylist(PLAYLIST_ID);
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

