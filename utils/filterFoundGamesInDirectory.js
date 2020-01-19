const { stat } = require("fs").promises;
const getAbsolutePath = require("./getAbsolutePath");
const getAbsoluteGamePath = require("./getAbsoluteGamePath");

module.exports = async function filterGamesNotFoundInDirectory(games, directoryPath) {
  const absoluteDirectoryPath = getAbsolutePath(directoryPath);
  const filteredGames = [];
  for (const game of games) {
    const gameAbsolutePath = getAbsoluteGamePath(absoluteDirectoryPath, game.path);
    try {
      const stats = await stat(gameAbsolutePath);
      if (stats.isFile()) {
        filteredGames.push(game);
      }
    } catch (error) {
      // File not found
    }
  }
  return filteredGames;
};
