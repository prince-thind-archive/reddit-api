const fs = require("fs");
const comments = require("../data/comments.json");

const res = [];

for (const comment of comments) {
    const c={
        subreddit:comment.subreddit,
        id:comment.id,
        controversiality:comment.controversiality,
        body:comment.body,
        link:"https://reddit.com"+comment.permalink,
        toBeDeleted:false,
        score:comment.score
    }
  
    res.push(c)
}

fs.writeFileSync('./data/comments_short.json',JSON.stringify(res,null,1))