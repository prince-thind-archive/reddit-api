require('dotenv').config()

const snoowrap = require("snoowrap");
const fs=require('fs');

const r = new snoowrap({
  userAgent: process.env.userAgent,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  refreshToken: process.env.refreshToken
});

r.getUser("snow-raven7").getComments().fetchAll().then(r=>{
    fs.writeFileSync('./data/comments.json',JSON.stringify(r,null,4))
});

