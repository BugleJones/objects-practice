//Write a function countLetters that can
//return to us all the unique characters that exist
//in a string that is passed into the function.

var lettersFunction = {
  items: [],
  uniqueLetters: function(input) {
    var unique = {};
    var count = "";
    for (var i = 0; i < input.length; i++) {
      if (count.indexOf(input.charAt(i))== -1) {
          count += input[i];
      }
    }
  return count;
  }
}

var userInput = process.argv.slice(2);
lettersFunction.uniqueLetters("inputalloftheletters");

