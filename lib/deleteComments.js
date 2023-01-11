require("dotenv").config();

const snoowrap = require("snoowrap");
const fs = require("fs");

const r = new snoowrap({
  userAgent: process.env.userAgent,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  refreshToken: process.env.refreshToken,
});

r.config({ requestDelay: 1000 });

const commentsJSON = fs.readFileSync("./data/comments_short.json", "utf8");
const ids = JSON.parse(commentsJSON).map((e) => e.id);

main();

async function main() {
  for (const id of ids) {
    await deleteComment(id).catch((c) => console.error(c));
  }
}

async function deleteComment(id) {
  await sleep(5);
  await r.getComment(id).edit(".");
  await r.getComment(id).delete();
}

async function sleep(n) {
  return new Promise((r) => setTimeout(r, n * 1000));
}
