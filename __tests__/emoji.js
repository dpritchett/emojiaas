const emoji = require("../emoji/emoji");

describe("emoji parsing library", () => {
  test("nameToUnicode", () => {
    expect(emoji.nameToUnicode("poop")).toEqual("💩");
    expect(emoji.nameToUnicode("robot_face")).toEqual("🤖");
  });

  
  test("parse name returns unicode match for name", () => {
    const result = emoji.findByName("poop");

    expect(result).toEqual("https://twemoji.maxcdn.com/36x36/1f4a9.png");
  });
});
