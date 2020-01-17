const { isAbsolute, dirname, resolve, normalize } = require("path");

module.exports = function getAbsolutePath(path) {
  if (isAbsolute(path)) {
    return normalize(path);
  }

  const currentDirectory = process.cwd();
  const absolutePath = resolve(currentDirectory, path);
  return absolutePath;
};
