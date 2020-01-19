const { stat } = require("fs").promises;
const getAbsolutePath = require("./getAbsolutePath");

module.exports = async function filterNotFoundGamesInDirectory(games, directoryPath) {
  const filteredGames = [];
  for (const game of games) {
    const gameAbsolutePath = getAbsolutePath(game.path, directoryPath);
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
