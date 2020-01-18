const loadGamelist = require("../utils/loadGamelist");
const filterGamesNotFoundInDirectory = require("../utils/filterGamesNotFoundInDirectory");
const getGamelistDirectoryPath = require("../utils/getGamelistDirectoryPath");

module.exports = async function check(gamelistPath) {
  const directoryPath = getGamelistDirectoryPath(gamelistPath);
  const games = await loadGamelist(gamelistPath);
  const notFound = await filterGamesNotFoundInDirectory(games, directoryPath);

  process.stdout.write(`Number of games: ${games.length}\n`);
  process.stdout.write(`Not found: ${notFound.length}\n`);
};
