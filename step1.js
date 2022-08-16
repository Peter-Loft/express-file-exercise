"use strict";

const fsP = require('fs/promises');
const argv = process.argv;

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("Contents: ", contents)
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

cat(argv[2]);

