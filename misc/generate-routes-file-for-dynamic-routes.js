/* The purpose of this script is to generate the `routes.txt` file that is used during
* the pre rendering at build time for dynamic route.
* For now we want to prerender all the video session dynamic routes */
const fetch = require("node-fetch");
const {ensureFileSync, writeFileSync} = require('fs-extra');
const DIST_DYNAMIC_ROUTES_FILENAME = 'routes.txt';
console.log('Generating routes.txt for dynamic routes pre rendering');

const getDistFilename = () => {
  return DIST_DYNAMIC_ROUTES_FILENAME;
}
/**
 * Fetch the playlist by id and map the response to return only the ids
 * @returns {Promise<void>}
 */
const getVideoIds = async () => {
  // Fetch the playlist of ngx-darija
  return fetch('http://localhost:8889/.netlify/functions/playlist')
    .then(res => res.json())
    .then(playlist => {
      if (playlist && playlist.error) {
        throw new Error(`Error when fetching playlist: ${playlist.error.message}`);
      } else {
        const items = playlist.items;
        console.log(`Got ${items.length} videos`);
        return items.map(item => item.snippet.resourceId.videoId);
      }
    });
}

/**
 * Resolves with the content need for the `routes.txt` file.
 * =>
 * ``/sessions/34dwe
 * ``/sessions/234dk2
 * @returns {Promise<string>}
 */
const getDynamicRoutesFileContent = async () => {
// Get video ids
  return dynamicRoutesGenerator.getVideoIds().then(videoIds => {
    let fileContent = '';
    // For each video append the dynamic route to the file content variable
    videoIds.forEach(videoId => {
      fileContent += `/sessions/${videoId}\n`;
    });
    return fileContent;
  });
}

/**
 * Computes and writes the `routes.txt` file
 */
const generateDynamicRoutesFile = () => {
// Get file content
  dynamicRoutesGenerator.getDynamicRoutesFileContent().then(fileContent => {
    // Ensure file existing or create it
    ensureFileSync(dynamicRoutesGenerator.getDistFilename());
    // Write the file content
    writeFileSync(dynamicRoutesGenerator.getDistFilename(), fileContent);
  })
    .catch(err => {
      console.error('Error when generating dynamic routes file', err);
      process.exit(1)
    })
}

const dynamicRoutesGenerator = {
  generateDynamicRoutesFile,
  getVideoIds,
  getDynamicRoutesFileContent,
  getDistFilename
}
module.exports = dynamicRoutesGenerator;
