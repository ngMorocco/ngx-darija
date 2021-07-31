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
  } catch (e) {
    console.log(e);
    return {};
  }
};

exports.handler = async context => {
  try {
    const { videoId, metadata } = getVideoContent(
      context.path.split('/').pop()
    );
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
