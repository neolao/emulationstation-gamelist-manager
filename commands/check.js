const loadGamelist = require("../utils/loadGamelist");
const filterFoundGamesInDirectory = require("../utils/filterFoundGamesInDirectory");
const getGamelistDirectoryPath = require("../utils/getGamelistDirectoryPath");
const findMissingImages = require("../utils/findMissingImages");
const findMissingVideos = require("../utils/findMissingVideos");

module.exports = async function check(gamelistPath) {
  const directoryPath = getGamelistDirectoryPath(gamelistPath);
  const games = await loadGamelist(gamelistPath);
  const foundGames = await filterFoundGamesInDirectory(games, directoryPath);
  const notFoundCount = games.length - foundGames.length;
  const missingImages = await findMissingImages(foundGames, directoryPath);
  const missingVideos = await findMissingVideos(foundGames, directoryPath);

  process.stdout.write(`Number of games: ${games.length}\n`);
  process.stdout.write(`Not found: ${notFoundCount}\n`);
  process.stdout.write(`Missing images: ${missingImages.length}\n`);
  process.stdout.write(`Missing videos: ${missingVideos.length}\n`);
};
