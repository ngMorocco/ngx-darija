const { getVideo } = require('../utils/youtube-api');

const { readJsonSync } = require('fs-extra');
const path = require('path');

const getCaseSensitiveVideoId = videoId => {
  try {
    const pathToMapping = path.resolve(
      __dirname + '/case-sensitive-video-id-mapping.json'
    );
    const mapping = readJsonSync(pathToMapping);
    return mapping[videoId] ? mapping[videoId] : videoId;
  } catch {
    return videoId;
  }
};

const getVideMetadata = videoId => {
  try {
    const file = path.resolve(
      `${__dirname}../../../data/episodes/${videoId}.json`
    );
    return readJsonSync(file);
  } catch {
    return { snippet: {} };
  }
};

exports.handler = async context => {
  try {
    let videoId = context.path.split('/').pop();
    videoId = getCaseSensitiveVideoId(videoId);
    const {
      items: [data]
    } = await getVideo(videoId);
    // const { snippet } = getVideMetadata(videoId);
    // const response = { ...data, snippet: { ...data.snippet, ...snippet } };
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
