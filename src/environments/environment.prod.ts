export const environment = {
  production: true,
  env: process.env.NODE_ENV as string,
  baseUrl: process.env.NG_APP_BASE_URL as string,
  playlistId: process.env.NG_APP_YOUTUBE_PLAYLIST_ID as string,
  algolia: {
    appId: process.env.NG_APP_ALGOLIA_APP_ID as string,
    apiKey: process.env.NG_APP_ALGOLIA_API_KEY as string,
    indexName: process.env.NG_APP_ALGOLIA_INDEX_NAME as string
  },
  application: {
    branch: process.env.NG_APP_BRANCH_NAME as string,
    version: process.env.NG_APP_VERSION as string,
    commit: process.env.NG_APP_COMMIT_REF as string
  }
};
