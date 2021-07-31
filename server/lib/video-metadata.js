const fs = require('fs');
const fm = require('front-matter');
const fg = require('fast-glob');
const path = require('path');
const { readJsonSync } = require('fs-extra');

module.exports = cwd => videoId => {
  try {
    const [chaptersFile, videoFile] = fg.sync(
      [`*-${videoId}/chapters.json`, `*-${videoId}/index.md`],
      {
        cwd,
        caseSensitiveMatch: false
      }
    );
    if (videoFile) {
      const video = fs.readFileSync(path.resolve(cwd, videoFile), 'utf8');
      const chapters = readJsonSync(path.resolve(cwd, chaptersFile), 'utf8');
      const fmData = fm(video);
      return {
        ...fmData.attributes,
        description: fmData.body,
        chapters,
        videoFile,
        chaptersFile
      };
    }
    return undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
