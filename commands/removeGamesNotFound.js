const getAbsolutePath = require("../utils/getAbsolutePath");

module.exports = async function removeGamesNotFound(gamelistPath) {
  const absoluteGamelistPath = getAbsolutePath(gamelistPath);

  process.stdout.write(`plop ${absoluteGamelistPath}`);
};
