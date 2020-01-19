const getAbsolutePath = require("../utils/getAbsolutePath");
const loadGamelist = require("../utils/loadGamelist");
const saveGamelist = require("../utils/saveGamelist");
const getGamelistDirectoryPath = require("../utils/getGamelistDirectoryPath");
const filterFoundGamesInDirectory = require("../utils/filterFoundGamesInDirectory");

module.exports = async function deleteGamesNotFound(gamelistPath) {
  const absoluteGamelistPath = getAbsolutePath(gamelistPath, process.cwd());
  const games = await loadGamelist(gamelistPath);
  const directoryPath = getGamelistDirectoryPath(gamelistPath);
  const foundGames = await filterFoundGamesInDirectory(games, directoryPath);
  const deletedGameCount = games.length - foundGames.length;

  await saveGamelist(foundGames, absoluteGamelistPath);
  process.stdout.write(`Deleted games: ${deletedGameCount}\n`);
};
