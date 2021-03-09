const fetch  = require('node-fetch');

const apiKey = "AIzaSyC96-TMDf8p-GcWcw9_VgtS4Fd1bUM0UZQ";

exports.handler = async () => {
  const data = await (
    await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLTCFcpZfnDoJxDofsnsNvvV_5djpEl4Bs&key=${apiKey}`
    )
  ).json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
