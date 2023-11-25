export const environment = {
  production: false,
  baseUrl: import.meta.env['NG_APP_BASE_URL'] as string,
  playlistId: import.meta.env['NG_APP_YOUTUBE_PLAYLIST_ID'] as string,
  algolia: {
    appId: import.meta.env['NG_APP_ALGOLIA_APP_ID'] as string,
    apiKey: import.meta.env['NG_APP_ALGOLIA_API_KEY'] as string,
    indexName: import.meta.env['NG_APP_ALGOLIA_INDEX_NAME'] as string
  },
  application: {
    branch: import.meta.env['NG_APP_BRANCH_NAME'] as string,
    version: import.meta.env['NG_APP_VERSION'] as string,
    commit: import.meta.env['NG_APP_COMMIT_REF'] as string
  }
};
