const util = require("util");
const execFile = util.promisify(require("child_process").execFile);

describe("removeGamesNotFound", () => {
  const egm = `${__dirname}/../egm.js`;

  it("should removes games not found", async () => {
    const { stdout } = await execFile("node", [egm, "removeGamesNotFound", "--help"]);
  });
});
