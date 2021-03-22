/* The purpose of this script is to generate the `routes.txt` file that is used during
 * the pre rendering at build time for dynamic route.
 * For now we want to prerender all the video session dynamic routes
 * More over netlify lower case all the urls so if we try to access directly to a
 * session video on the address /sessions/rT0FUs7uUks netlify will redirect to /sessions/rt0fus7uuks
 * And then our netlify function will not be able to fetch the right video ID.
 * This js script also generates a plain `.json` mapping `case-sensitive-vide-id-mapping.json` located in `src/functions/utils`
 * This mapping is then used to convert lower case video ids to case sensitive video Ids
 * https://answers.netlify.com/t/my-url-paths-are-forced-into-lowercase/1659 */
const fetch = require('node-fetch');
const { ensureFileSync, writeFileSync, writeJsonSync } = require('fs-extra');
const DIST_DYNAMIC_ROUTES_FILENAME = 'routes.txt';
const DIST_MAPPER_JS_FILE =
  'src/functions/videos/case-sensitive-video-id-mapping.json';
console.log('Generating routes.txt for dynamic routes pre rendering');

const getDistFilename = () => {
  return DIST_DYNAMIC_ROUTES_FILENAME;
};

const getMapperFile = () => {
  return DIST_MAPPER_JS_FILE;
};

let videoIds = [];

/**
 * Fetch the playlist by id and map the response to return only the ids
 * @returns {Promise<void>}
 */
const getVideoIds = async () => {
  // If video ids already computed return them
  if (videoIds && videoIds.length > 0) {
    return videoIds;
  }
  // Fetch the playlist of ngx-darija
  const playlist = await (
    await fetch('http://localhost:8889/.netlify/functions/playlist')
  ).json();
  if (playlist && playlist.error) {
    throw new Error(`Error when fetching playlist: ${playlist.error.message}`);
  } else {
    const items = playlist.items;
    console.log(`Got ${items.length} videos`);
    videoIds = items.map(item => item.snippet.resourceId.videoId);
    return videoIds;
  }
};

/**
 * Resolves with the content need for the `routes.txt` file.
 * =>
 * ``/sessions/34dwe
 * ``/sessions/234dk2
 * @returns {Promise<string>}
 */
const getDynamicRoutesFileContent = async () => {
  // Get video ids
  let fileContent = '';
  const videoIds = await dynamicRoutesGenerator.getVideoIds();
  // For each video append the dynamic route to the file content variable
  videoIds.forEach(videoId => {
    fileContent += `/sessions/${videoId}\n`;
  });
  return fileContent;
};

/**
 * Computes and writes the `routes.txt` file
 */
const generateDynamicRoutesFile = async () => {
  try {
    const fileContent = await dynamicRoutesGenerator.getDynamicRoutesFileContent();
    // Ensure file existing or create it
    ensureFileSync(dynamicRoutesGenerator.getDistFilename());
    // Write the file content
    writeFileSync(dynamicRoutesGenerator.getDistFilename(), fileContent);
    await dynamicRoutesGenerator.generateYoutubeVideoIdCaseSensitiveMapper();
  } catch (e) {
    console.error('Error when generating dynamic routes file', e);
    process.exit(1);
  }
};

/**
 * Generates a mapper js file that exports a function that converts lower case youtube video IDs
 * to their matching case sensitive IDs
 */
const generateYoutubeVideoIdCaseSensitiveMapper = async () => {
  let mapping = {};
  const videoIds = await dynamicRoutesGenerator.getVideoIds();
  videoIds.forEach(videoId => {
    mapping[videoId.toLowerCase()] = videoId;
  });
  ensureFileSync(dynamicRoutesGenerator.getMapperFile());
  writeJsonSync(dynamicRoutesGenerator.getMapperFile(), mapping);
};

const dynamicRoutesGenerator = {
  generateDynamicRoutesFile,
  getVideoIds,
  getDynamicRoutesFileContent,
  getDistFilename,
  getMapperFile,
  generateYoutubeVideoIdCaseSensitiveMapper
};
module.exports = dynamicRoutesGenerator;

(async () => {
  await generateDynamicRoutesFile();
})();
