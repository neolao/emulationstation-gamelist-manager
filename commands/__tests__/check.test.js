const util = require("util");
const execFile = util.promisify(require("child_process").execFile);

describe("check", () => {
  const egm = `${__dirname}/../../egm.js`;

  it("should display the number of games", async () => {
    const { stdout } = await execFile("node", [egm, "check", `${__dirname}/systems/first/gamelist.xml`]);
    expect(stdout).toContain("Number of games: 5");
  });

  it("should display the number of games not found", async () => {
    const { stdout } = await execFile("node", [egm, "check", `${__dirname}/systems/first/gamelist.xml`]);
    expect(stdout).toContain("Not found: 2");
  });

  it("should display the number of missing images", async () => {
    const { stdout } = await execFile("node", [egm, "check", `${__dirname}/systems/first/gamelist.xml`]);
    expect(stdout).toContain("Missing images: 2");
  });

  it("should display the number of missing videos", async () => {
    const { stdout } = await execFile("node", [egm, "check", `${__dirname}/systems/first/gamelist.xml`]);
    expect(stdout).toContain("Missing videos: 2");
  });
});
