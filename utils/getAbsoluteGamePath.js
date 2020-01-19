const { isAbsolute, resolve, normalize } = require("path");

module.exports = function getAbsoluteGamePath(directoryPath, gamePath) {
  if (isAbsolute(gamePath)) {
    return normalize(gamePath);
  }
  const absolutePath = resolve(directoryPath, gamePath);
  return absolutePath;
};
