const { getVideos } = require('../utils/youtube-api');

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
exports.handler = async context => {
  try {
    let videoId = context.path.split('/').pop();
    videoId = getCaseSensitiveVideoId(videoId);
    const data = await getVideos(videoId);
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
