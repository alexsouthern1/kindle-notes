const fs = require("fs");
const { log } = require("console");

const read_string = fs.readFileSync("./kindle-notes/My Clippings.txt", "utf8");
let array = read_string.toString().split("\n");
let noteDetails = {};
let notesArr = [];

// TODO: Allow it to be dynamic with offset rows. Can happen when user takes notes on sep lines. 

for (i = 0; i < array.length; i++) {
  console.log(i);
  
  try {
    if (i % 5 == 0) {
      tempTitle = array[i].split("\r")[0];
      noteDetails["Title"] = tempTitle;
    }

    if (i % 5 == 1) {
      let temp = array[i].split(", ")[1].split(" ");
      tempDate = temp[0] + " " + temp[1] + " " + temp[2];
      noteDetails["Date"] = tempDate;
    }

    if (i % 5 == 3) {
      tempText = array[i].split("\r")[0];
      noteDetails["Text"] = tempText;
    }
  } catch (err) {
    console.log("ERROR!: " + err);
  }
  console.log(noteDetails);
  
  notesArr.push(noteDetails);
}

// console.log(notesArr);
