const { getPlaylist } = require("./utils/youtube-api");

exports.handler = async () => {
  try {
    const data = await getPlaylist("PLTCFcpZfnDoJxDofsnsNvvV_5djpEl4Bs");
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
