// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  nodeEnv: process.env.NODE_ENV as string,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
