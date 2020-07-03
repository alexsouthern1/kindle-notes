const fs = require("fs");

const read_string = fs.readFileSync("./kindle-notes/clippings.txt", "utf8");
let array = read_string.toString().split("\n");
let notesArr = [];

// Allow it to be dynamic with offset rows. Can happen when user takes notes on sep lines
const getNotes = async () => {
  for (i = 0; i < array.length; i += 5) {
    try {
      // Problematic if a title has parenthesis 
      tempTitle = array[i].split(/[\r()]+/);      
      temp = array[i + 1].split(", ")[1].split(" ");
      tempDate = temp[0] + " " + temp[1] + " " + temp[2];
      tempText = array[i + 3].split("\r")[0];

      newObj = {
        Title: tempTitle[0].trim(),
        Author: tempTitle[1].trim(),
        Date: tempDate,
        Text: tempText.trim(),
      };
      notesArr.push(newObj);
    } catch (err) {
      console.log("ERROR!: " + err);
    }
  }
  return notesArr;
};

module.exports = { getNotes, notesArr };
