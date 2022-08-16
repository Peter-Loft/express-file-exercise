"use strict";

const fsP = require('fs/promises');
const axios = require('axios')
const argv = process.argv;

/**
* Function which accepts a path to a text file
* and returns the contents of said text file.
 * 
 * @param {string} path 
 */
async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log("Contents: ", contents)
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

/**
 * 
 * @param {string} url 
 */
async function webCat(url) {
  try {
    let contents = await axios.get(url);
    console.log("Contents: ", contents);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

cat(argv[2]);

