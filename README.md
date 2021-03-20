# Description

This is the official `Angular in Darija` landing page containing all video sessions.

**Angular in Darija** is Live Coding Series on Youtube to demystify Angular core concepts in Darija (Moroccan dialect).

https://ngx-darija.netlify.app

# Development (SPA)

- Run `npm start`
- Tests `npm run test`

# Development (Netlify Function)

- Run `npm install netlify-cli -g`

To fetch the `ngMorocco` video sessions you will need to create an API key and
set up your dev environment for the `netlify function` to consume this API key.

- follow [this instructions](https://developers.google.com/maps/documentation/maps-static/get-api-key?hl=en) to set up an API key
  with your Google account
- add the GOOGLE_API_KEY to your env variables: `export GOOGLE_API_KEY='{{YOUR_API_KEY}}'`
- run `netlify dev` from root directory

# Test the pre rendered version locally
  
  Before being deployed, the app is pre rendered at build time, so we can quickly give a static version of the application as soon
  as a request hits the server. Then the javascript files that will take over the app are loaded in the background.
  Because of that the first load of the application may not behave the same as 
  when it ran using the command `netlify dev`. 
  
  **It is recommended to test changes as if there were on the server** by pre rendering the application using:
  `netlify build` (If it's the first time running this command you will be asked to login and link a site
  [more info here](https://docs.netlify.com/cli/get-started/#installation)). Then when the build is done, serve the 
  dist folder using `netlify dev --dir dist/ngx-darija/browser`

# Build

- Run `NODE_ENV npm run build`

# Build - SSR

- Run `NODE_ENV npm run build:ssr`

# Contributions

Thanks for your contribution.

If it's your first contribution to a public Github repo follow [this](https://github.com/firstcontributions/first-contributions).

Otherwise Just

- Pick an issue.
- Check if someone is already working on it (read the comments)
- Let everyone know that you are working on the issue (Add a comment expressing that)

# Discord

We have a discord server join [here](https://bit.ly/ngDiscord).
