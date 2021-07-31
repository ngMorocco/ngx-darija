# Description

**Angular in Darija** is a Live Coding Series on Youtube aiming to demystify Angular core concepts in Darija (Moroccan dialect).

https://ngx-darija.netlify.app

# Quick start

1. **Fork and clone the project**

   ```sh
   git clone git@github.com:your-username/ngx-darija.git
   ```

2. **Install Netlify CLI**

   ```sh
   npm install -g netlify-cli
   ```

3. **Prepare your environment**

   Follow these [instructions](https://developers.google.com/maps/documentation/maps-static/get-api-key?hl=en) to set up an API key with your Google account

   Add the key to your .env file

   ```sh
   GOOGLE_API_KEY=AIzaSyB_xxxxxxxx
   ```

4. **Start local server**
   ```sh
   netlify dev
   ```

# Create content

You can update a video's text content (description, chapters) **without having to have the project locally**.

1. Go to the video page on the website, e.g. [Getting Started](https://ngx-darija.netlify.app/sessions/rT0FUs7uUks).

2. Click on the **Edit** link in the section you want to update.

3. GitHub should guide you through the editing process as described here: [Editing files in another user's repository](https://docs.github.com/en/github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository).

4. Once your PR is merged and the Pipeline lights are green, your content will go live!

# Build

Until the build is automated in the PR pipeline, you will want to build the application locally before submitting the PR.

If **you have a netlify account**, you can [link your site to this project](https://docs.netlify.com/cli/get-started/#installation)

```sh
netlify build
netlify deploy # deploys the built application on your Netlify's site
```

If you **don't have a netlify account**

```sh
# Shell
NODE_ENV=production npm run site:dev
```

```powershell
# PowerSell
$env:NODE_ENV="production"; npm run site:dev
```

Preview the build result locally

```sh
netlify dev --dir dist/ngx-darija/browser
```

# Contributions

If it's your first contribution to a public Github repo
follow [this](https://github.com/firstcontributions/first-contributions).

Otherwise Just

- Pick an issue.
- Check if someone is already working on it (read the comments)
- Let everyone know that you are working on the issue (Add a comment expressing that)

Thank you for your contribution.

# Discord

Join the Community Discord Server [here](https://bit.ly/ngDiscord).
