const program = require("commander");
const info = require("./package.json");
const check = require("./commands/check");
const extract = require("./commands/extract");
const removeGamesNotFound = require("./commands/removeGamesNotFound");

program.version(info.version);
program
  .command("check <gamelist-file-path>")
  .description("Check gamelist")
  .action(check);
program
  .command("extract <gamelist-file-path> [destination-path]")
  .description("Extract gamelist informations")
  .action(extract);
program
  .command("removeGamesNotFound <gamelist-file-path>")
  .description("Remove games not found in gamelist")
  .action(removeGamesNotFound);
program.parse(process.argv);

const noCommandSpecified = process.argv.length <= 2;
if (noCommandSpecified) {
  program.help();
}
