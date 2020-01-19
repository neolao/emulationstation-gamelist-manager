const util = require("util");
const execFile = util.promisify(require("child_process").execFile);
const { copyFile, unlink } = require("fs").promises;

describe("deleteGamesNotFound", () => {
  const egm = `${__dirname}/../../egm.js`;
  const originalGamelist = `${__dirname}/systems/first/gamelist.xml`;
  const temporaryGamelist = `${__dirname}/systems/first/gamelist.tmp.xml`;

  it("should removes games not found", async () => {
    await copyFile(originalGamelist, temporaryGamelist);

    const { stdout: deleteOutput } = await execFile("node", [egm, "deleteGamesNotFound", temporaryGamelist]);
    expect(deleteOutput).toContain("Deleted games: 2");

    const { stdout: checkOutput } = await execFile("node", [egm, "check", temporaryGamelist]);
    expect(checkOutput).toContain("Not found: 0");

    await unlink(temporaryGamelist);
  });
});
