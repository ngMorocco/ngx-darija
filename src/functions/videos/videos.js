const { getVideos } = require('../utils/youtube-api');

const { readJsonSync } = require('fs-extra');
const path = require('path');

exports.handler = async context => {
  try {
    const videoId = context.path.split('/').pop();
    const pathToMapping = path.resolve(
      __dirname + '/case-sensitive-video-id-mapping.json'
    );
    const mapping = readJsonSync(pathToMapping);
    const caseSensitiveId = mapping[videoId] ? mapping[videoId] : videoId;
    const data = await getVideos(caseSensitiveId);
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
