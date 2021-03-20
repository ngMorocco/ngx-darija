const { getVideos } = require("./utils/youtube-api");

exports.handler = async (context) => {
  try {
    const videoId = context.path.split("/").pop();
    const data = await getVideos(videoId);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: "Error while getting data from YT",
    };
  }
};
