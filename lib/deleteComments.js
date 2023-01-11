require("dotenv").config();

const snoowrap = require("snoowrap");
const fs = require("fs");

const r = new snoowrap({
  userAgent: process.env.userAgent,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  refreshToken: process.env.refreshToken,
});

const ids = fs.readFileSync("../data/ids.json");

main();

async function main() {
  for (const id of ids) {
    await deleteComment(id);
  }
}

async function deleteComment(id) {
  await r.getComment(id).edit(".");
  await r.getComment(id).delete();
}
