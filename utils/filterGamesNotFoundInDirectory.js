const { isAbsolute, dirname, resolve, normalize } = require("path");
const { stat } = require("fs").promises;
const getAbsolutePath = require("./getAbsolutePath");

function getAbsoluteGamePath(directoryPath, gamePath) {
  if (isAbsolute(gamePath)) {
    return normalize(gamePath);
  }
  const absolutePath = resolve(directoryPath, gamePath);
  return absolutePath;
}

module.exports = async function filterGamesNotFoundInDirectory(games, directoryPath) {
  const absoluteDirectoryPath = getAbsolutePath(directoryPath);
  const filteredGames = [];
  for (const game of games) {
    const gameAbsolutePath = getAbsoluteGamePath(directoryPath, game.path);
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
