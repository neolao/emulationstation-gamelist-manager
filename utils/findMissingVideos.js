const { stat } = require("fs").promises;
const { basename, extname, resolve } = require("path");
const getAbsolutePath = require("./getAbsolutePath");

module.exports = async function findMissingVideos(games, directoryPath) {
  const missingVideos = [];
  for (const game of games) {
    const filename = basename(game.path);
    const ext = extname(game.path);
    const base = basename(filename, ext);

    if (!game.video) {
      const expectedVideoPath = resolve(directoryPath, "media", "videos", `${base}.mp4`);
      missingVideos.push(expectedVideoPath);
      continue;
    }

    const videoAbsolutePath = getAbsolutePath(game.video, directoryPath);
    try {
      const stats = await stat(videoAbsolutePath);
      if (!stats.isFile()) {
        missingVideos.push(videoAbsolutePath);
      }
    } catch (error) {
      missingVideos.push(videoAbsolutePath);
    }
  }
  return missingVideos;
};
