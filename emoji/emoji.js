const emoji = require("node-emoji");
const twemoji = require("twemoji");

const parseCb = (icon, options, variant) => {
  var src = `https:\/\/twemoji.maxcdn.com/36x36/${icon}.png`;
  return src;
};

const nameToUnicode = name => {
  return emoji.emojify(`:${name}:`);
};

const imageUrlFromName = name => {
  const asUnicode = nameToUnicode(name);

  const result = twemoji.parse(asUnicode, { callback: parseCb });
  const src = result.split('src="')[1];
  
  return src.split('"')[0];
};

module.exports = {
  imageUrlFromName: imageUrlFromName,
  nameToUnicode: nameToUnicode
};
