const { stat } = require("fs").promises;
const getAbsolutePath = require("./getAbsolutePath");
const getAbsoluteGamePath = require("./getAbsoluteGamePath");

module.exports = async function filterNotFoundGamesInDirectory(games, directoryPath) {
  const absoluteDirectoryPath = getAbsolutePath(directoryPath);
  const filteredGames = [];
  for (const game of games) {
    const gameAbsolutePath = getAbsoluteGamePath(absoluteDirectoryPath, game.path);
    try {
      const stats = await stat(gameAbsolutePath);
      if (!stats.isFile()) {
        filteredGames.push(game);
      }
    } catch (error) {
      filteredGames.push(game);
    }
  }
  return filteredGames;
};
