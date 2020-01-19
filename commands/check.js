const loadGamelist = require("../utils/loadGamelist");
const filterNotFoundGamesInDirectory = require("../utils/filterNotFoundGamesInDirectory");
const getGamelistDirectoryPath = require("../utils/getGamelistDirectoryPath");

module.exports = async function check(gamelistPath) {
  const directoryPath = getGamelistDirectoryPath(gamelistPath);
  const games = await loadGamelist(gamelistPath);
  const notFound = await filterNotFoundGamesInDirectory(games, directoryPath);

  process.stdout.write(`Number of games: ${games.length}\n`);
  process.stdout.write(`Not found: ${notFound.length}\n`);
};
