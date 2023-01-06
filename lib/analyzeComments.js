const fs = require("fs");
const jsdom = require("jsdom");
const comments = require("../data/comments.json");

const { JSDOM } = jsdom;

const res = [];

for (const comment of comments) {
  const html = comment.body_html;
  const { document } = new JSDOM(html).window;

  const as =[...document.querySelectorAll('a')];
  if(as.length!=0){
    const c={
        body:comment.body,
        link:`https://reddit.com${comment.permalink}`,
        time: new Date(+comment.created_utc*1000)
    }
    res.push(c)
  }
}

fs.writeFileSync('./data/comments_with_links.json',JSON.stringify(res,null,1))