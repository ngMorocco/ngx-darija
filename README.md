# Description

This is the official `Angular in Darija` landing page containing all video sessions.

**Angular in Darija** is Live Coding Series on Youtube to demystify Angular core concepts in Darija (Moroccan dialect).

https://ngx-darija.netlify.app

# Development (SPA)

- Run `npm start`
- Tests `npm run test`  

# Development (Netlify Function)

To fetch the `ngMorocco` video sessions you will need to create an API key and
set up your dev environment for the `netlify function` to consume this API key.

- npm install netlify-cli -g
- follow [this instructions](https://developers.google.com/maps/documentation/maps-static/get-api-key?hl=en) to set up an API key
  with your Google account
- add the GOOGLE_API_KEY to your env variable: `export GOOGLE_API_KEY='{{YOUR_API_KEY}}'`
- run `netlify dev` from root directory

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
