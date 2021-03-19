const fetch = require("node-fetch");

const apiKey = process.env.GOOGLE_API_KEY;

exports.handler = async (videoId) => {
  try {
    const data = await (
      await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&maxResults=50&key=${apiKey}`
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
