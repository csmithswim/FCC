/* The .test() method takes a regex and applies it to a string(which is placed inside the parentheses) and returns true/false.
*/
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true

/* 
You can search for multple patterns using the | operator, like so */

let testStr = "pet cat";
let testRegex = /cat|dog/;

/*
You can ignore casing in regex by using the i flag and appending it to the reg. */

let testRegex = /ignoreCase/i

/*
Using the .match() method returns the actual regex that you want */
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns "expressions"

/*
To search or extract a pattern more than once, use the g flag */ 
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

/* The wildcard character, . , will match any one character. The wildcard is also called dot and period. */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true

/* Character classes, ([ ]) allow you to define a group of characters you wish to match. */
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

/* 
Inside a character set, you can define a range of characters and numbers to match using a hyphen character: -. */ 

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);


/*
You can create a set of characters you don't want to match by using the caret character ^ */ 

let regEx = /[^aeiou]/gi; // matches all characters that are not a vowel

/* 
The + character checks if a character or group of characters appear one or more times in a row. */

/a+/g //would find one match in "abc" and return ["a"] and also "abab" it would find two matches and return ["a","a"]

/* The star * looks for characters that occur one or more times */ 
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

/*











