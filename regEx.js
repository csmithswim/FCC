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
There is greedy and lazy matching with regex, greedy gets the most characters and lazy the least, applying lazy is with the ?> character */

/t[a-z]*?i/ //returns ["ti"]

/* 
The ^ symbol inside a regex expression will check the beginning of the string to test */
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false

/*
You can search for a pattern at the end of strings with the $ sign */
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false

/* You can match all letters/numbers/_ with the \w shortcut. */
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

/*
You can search for everything but letters/numbers/_ with \W, its the same as [^A-Za-z0-9_] */ 
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

/* \d will look for [0-9], similarly \D will look for all non numbers */

/* \s will match whitespace/carriage return/tab/form feed/new line of characters

conversely, \S = [^ \r\t\f\n\v] and will look for everything but whitespace */

/* You can look for a specific range of characters you want to match with { }, like so: */

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

/* You can also just search the lower bounds of how many characters you want to test */ 
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true

/*
You can match a specific number of characters just by putting one number in the {} */

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false

/* The question mark ? can check for 0 or 1 element presceding it, making the element before the ? optional with the test. */

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true



















