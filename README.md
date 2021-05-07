# Description

This is the official `Angular in Darija` landing page containing all video sessions.

**Angular in Darija** is Live Coding Series on Youtube to demystify Angular core concepts in Darija (Moroccan dialect).

https://ngx-darija.netlify.app

# Development

## Prepare the env

`npm install -g netlify-cli`

Make sure you have the latest `netlify-cli` version with `netlify function:serve` support.

To fetch `Angular In Darija` video sessions you will need to create a Google API key.

- follow these [instructions](https://developers.google.com/maps/documentation/maps-static/get-api-key?hl=en) to set up
  an API key with your Google account
- add the key to your .env file `GOOGLE_API_KEY=AIzaSyB_xxxxxxxx`

## Start local server

- `netlify dev` from root directory

# Build

## W/ a Netlify account

You can [link your site to this project](https://docs.netlify.com/cli/get-started/#installation)

- `netlify build`

## W/O a Netlify account

### Shell

- `GOOGLE_API_KEY=AIzaSyB_xxxxxxxx NODE_ENV=production npm run prerender:ci`

### PowerShell

- `$env:GOOGLE_API_KEY="AIzaSyB_xxxxxxxx"; $env:NODE_ENV="production"; npm run prerender:ci`

# Preview

Build the project.

- `netlify dev --dir dist/ngx-darija/browser`

# Contributions

If it's your first contribution to a public Github repo
follow [this](https://github.com/firstcontributions/first-contributions).

Otherwise Just

- Pick an issue.
- Check if someone is already working on it (read the comments)
- Let everyone know that you are working on the issue (Add a comment expressing that)

Thank you for your contribution.

# Discord

We have a discord server join [here](https://bit.ly/ngDiscord).
