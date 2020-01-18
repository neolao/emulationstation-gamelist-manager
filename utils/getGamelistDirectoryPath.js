const { readFile } = require("fs").promises;
const { dirname } = require("path");
const getAbsolutePath = require("./getAbsolutePath");

module.exports = function getGamelistDirectoryPath(filePath) {
  const absoluteFilePath = getAbsolutePath(filePath);
  return dirname(absoluteFilePath);
};
