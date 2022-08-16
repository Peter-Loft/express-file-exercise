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
  let contents;
  try {
    contents = await fsP.readFile(path, "utf8");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
  console.log("Contents: ", contents)
}

/**
 * Function which accepts a URL to a webiste
 * and returns the html contents of said website.
 * @param {string} url 
 */
async function webCat(url) {
  let contents;
  try {
    contents = await axios({url});
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
  console.log("Contents: ", contents.data);
}

/**
 * 
 * @param {string} arg 
 */
function callCats(arg) {
  if (arg.startsWith('http')) {
    webCat(arg)
  } else {
    cat(arg)
  }
}

callCats(argv[2]);

