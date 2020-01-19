const { stat } = require("fs").promises;
const { basename, extname, resolve } = require("path");
const getAbsolutePath = require("./getAbsolutePath");

module.exports = async function findMissingImages(games, directoryPath) {
  const missingImages = [];
  for (const game of games) {
    const filename = basename(game.path);
    const ext = extname(game.path);
    const base = basename(filename, ext);

    if (!game.image) {
      const expectedImagePath = resolve(directoryPath, "media", "images", `${base}.png`);
      missingImages.push(expectedImagePath);
      continue;
    }

    const imageAbsolutePath = getAbsolutePath(game.image, directoryPath);
    try {
      const stats = await stat(imageAbsolutePath);
      if (!stats.isFile()) {
        missingImages.push(imageAbsolutePath);
      }
    } catch (error) {
      missingImages.push(imageAbsolutePath);
    }
  }
  return missingImages;
};
