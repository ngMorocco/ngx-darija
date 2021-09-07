const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_APP_KEY = process.env.ALGOLIA_APP_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

const algoliasearch = require('algoliasearch');
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_APP_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

module.exports = data => {
  try {
    const records = data
      .map(({ video, videoId, metadata }) =>
        metadata?.chapters?.map(chapter => ({
          objectID: `${videoId}_${chapter.start}`,
          ...chapter,
          session: {
            videoId,
            ...(metadata || video.items[0].snippet),
            chapters: undefined
          }
        }))
      )
      .filter(object => !!object)
      .flat();
    index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });
  } catch (e) {
    console.log(e);
  }
};
