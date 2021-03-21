const { readJsonSync } = require('fs-extra');
const getCaseSensitiveYoutubeVideoId = videoId => {
  try {
    const mapping = readJsonSync(
      'src/functions/utils/case-sensitive-video-id-mapping.json'
    );
    const caseSensitiveId = mapping[videoId];
    return caseSensitiveId ? caseSensitiveId : videoId;
  } catch (e) {
    return videoId;
  }
};

module.exports = {
  getCaseSensitiveYoutubeVideoId
};
