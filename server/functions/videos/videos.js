const { getVideo } = require('../../utils/youtube-api');

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

const getVideoMetadata = videoId => {
  const fs = require('fs');
  const fm = require('front-matter');
  const fg = require('fast-glob');

  try {
    const [file] = fg.sync([
      `server/functions/videos/sessions/*-${videoId}/index.md`
    ]);
    const data = fs.readFileSync(file, 'utf8');
    return fm(data);
  } catch (e) {
    console.log(e);
    return {};
  }
};

exports.handler = async context => {
  try {
    let videoId = context.path.split('/').pop();
    videoId = getCaseSensitiveVideoId(videoId);
    const {
      items: [data]
    } = await getVideo(videoId);
    const meta = getVideoMetadata(videoId);
    return {
      statusCode: 200,
      body: JSON.stringify({ ...data, meta: { description: meta.body } })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Error while getting data from YT'
    };
  }
};
