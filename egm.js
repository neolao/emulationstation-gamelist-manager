#!/usr/bin/env node

const program = require("commander");
const info = require("./package.json");
const check = require("./commands/check");
const deleteGamesNotFound = require("./commands/deleteGamesNotFound");

program.version(info.version);
program
  .command("check <gamelist-file-path>")
  .description("Check gamelist")
  .action(check);
program
  .command("deleteGamesNotFound <gamelist-file-path>")
  .description("Delete games not found in gamelist")
  .action(deleteGamesNotFound);
program.on("command:*", () => {
  console.error("Invalid command: %s\nSee --help for a list of available commands.", program.args.join(" "));
  process.exit(1);
});
program.parse(process.argv);

const noCommandSpecified = process.argv.length <= 2;
if (noCommandSpecified) {
  program.help();
}
