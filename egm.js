const program = require("commander");
const info = require("./package.json");
const extract = require("./commands/extract");

program.version(info.version);
program
  .command("extract <gamelist-file-path> [destination-path]")
  .description("Extract gamelist informations")
  .action(extract);
program.parse(process.argv);

const noCommandSpecified = process.argv.length <= 2;
if (noCommandSpecified) {
  program.help();
}
