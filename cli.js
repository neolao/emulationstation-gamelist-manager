const program = require("commander");
const info = require("./package.json");

program.version(info.version);

program.parse(process.argv);
