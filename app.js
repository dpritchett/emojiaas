const http = require("http");
const url = require("url");

const emoji = require("./emoji/emoji");

const { PORT = 3000 } = process.env;

http
  .createServer((req, res) => {
    route = url.parse(`http://${req.url}`).pathname;

    if (route.match(/\/named\/\w+/)) {
      const longName = route.split("/named/")[1];

      const imageUrl = emoji.imageUrlFromName(longName);

      res.end(`<html><body><img src="${imageUrl}"/></body></html>`);
    } else {
      res.end(`Hello World from Node.js at ${route}\n`);
    }
  })
  .listen(PORT);
