const fetch = require("node-fetch");

const apiKey = process.env.GOOGLE_API_KEY;
const playlistId = "PLTCFcpZfnDoJxDofsnsNvvV_5djpEl4Bs";

exports.handler = async () => {
  try {
    const data = await (
      await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
      )
    ).json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch(e) {
    return {
      statusCode: 500,
      body: 'Error while getting data from YT',
    };
  }
};
