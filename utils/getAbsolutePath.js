const { isAbsolute, dirname, resolve, normalize } = require("path");

module.exports = function getAbsolutePath(path) {
  if (isAbsolute(path)) {
    return normalize(path);
  }

  const currentDirectory = dirname(process.argv[1]);
  const absolutePath = resolve(currentDirectory, path);
  return absolutePath;
};
