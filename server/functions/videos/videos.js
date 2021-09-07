const DB_FILE = __dirname + '/generated/db.json';

const { getVideo } = require('../../lib/youtube-api');
const { readJsonSync } = require('fs-extra');

const getVideoContent = videoId => {
  try {
    const db = readJsonSync(DB_FILE);
    return (
      db.find(
        video => video.videoId.toLowerCase() === videoId.toLowerCase()
      ) || { videoId }
    );
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File db.json not found, not metadata!');
      return { videoId };
    }
    throw err;
  }
};

exports.handler = async event => {
  try {
    const { videoId, metadata } = getVideoContent(event.path.split('/').pop());
    const {
      items: [data]
    } = await getVideo(videoId);
    return data
      ? {
          statusCode: 200,
          body: JSON.stringify({
            ...data,
            meta: metadata
          })
        }
      : {
          statusCode: 404,
          body: 'Video not found'
        };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: 'Error while getting data from YT'
    };
  }
};
