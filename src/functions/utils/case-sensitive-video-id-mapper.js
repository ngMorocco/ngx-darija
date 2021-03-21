const { readJsonSync } = require('fs-extra');
const path = require('path');
const getCaseSensitiveYoutubeVideoId = videoId => {
  try {
    const pathToMapping = path.resolve(
      __dirname + '/case-sensitive-video-id-mapping.json'
    );
    const mapping = readJsonSync(pathToMapping);
    const caseSensitiveId = mapping[videoId];
    return caseSensitiveId ? caseSensitiveId : videoId;
  } catch (e) {
    return videoId;
  }
};

module.exports = {
  getCaseSensitiveYoutubeVideoId
};
