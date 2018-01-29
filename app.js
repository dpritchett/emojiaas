const http = require("http");
const url = require("url");

const emoji = require("node-emoji");
const twemoji = require("twemoji");

const { promisify } = require("util");

const { PORT = 3000 } = process.env;

var handleNamed = function(name) {
  asUnicode = emoji.emojify(`:${name}:`);

  return twemoji.parse(asUnicode, {
    callback: function(icon, options, variant) {
      var src = `https:\/\/twemoji.maxcdn.com/36x36/${icon}.png`;
      return src;
    }
  });
};

http
  .createServer((req, res) => {
    route = url.parse(`http://${req.url}`).pathname;

    if (route.match(/\/named\/\w+/)) {
      name = route.split("/named/")[1];

      res.end(`<html><body>${handleNamed(name)}</body></html>`);
    } else {
      res.end(`Hello World from Node.js at ${route}\n`);
    }
  })
  .listen(PORT);
