const { dirname } = require("path");
const getAbsolutePath = require("./getAbsolutePath");

module.exports = function getGamelistDirectoryPath(filePath) {
  const absoluteFilePath = getAbsolutePath(filePath, process.cwd());
  return dirname(absoluteFilePath);
};
