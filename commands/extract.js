const { resolve, dirname } = require("path");
const { readFile } = require("fs").promises;
const xml2js = require("xml2js");
const getAbsolutePath = require("../utils/getAbsolutePath");

module.exports = async function extract(gamelistPath, destinationPath) {
  const absoluteGamelistPath = getAbsolutePath(gamelistPath);
  const absoluteDestinationPath = destinationPath
    ? getAbsolutePath(destinationPath)
    : resolve(dirname(absoluteGamelistPath), "data");

  process.stdout.write(`Extracting informations\n  from "${absoluteGamelistPath}"\n  to   "${absoluteDestinationPath}" ...\n`);

  const parser = new xml2js.Parser();
  const gamelistXml = await readFile(absoluteGamelistPath);
  const data = await parser.parseStringPromise(gamelistXml);
  console.log(data);
};
