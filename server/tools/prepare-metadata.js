const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;
const VIDEOS_DIR = __dirname + '/../../content/videos';
const { mkdirpSync, writeFile } = require('fs-extra');
const { getPlaylist } = require('../lib/youtube-api');
const fs = require('fs');
const path = require('path');

const markdownTemplate = video => `---
title: ${video.title.replace(/ - Angular in Darija/gi, '')}
---

${video.description}

`;

(async () => {
  const playlist = await getPlaylist(YOUTUBE_PLAYLIST_ID);
  playlist.items.forEach(({ snippet }) => {
    const videoId = snippet.resourceId.videoId;
    const position = new String(snippet.position + 1).padStart(3, '0');
    const folder = `${VIDEOS_DIR}/${position}-${videoId}`;
    fs.access(folder, fs.F_OK, err => {
      if (err) {
        console.log(`Generating ${folder}`);
        mkdirpSync(folder);
        writeFile(path.resolve(folder, 'chapters.json'), '[]', err => {
          if (err) return console.error(err);
        });
        writeFile(
          path.resolve(folder, 'index.md'),
          markdownTemplate(snippet),
          err => {
            if (err) return console.error(err);
          }
        );
      }
    });
  });
})();
