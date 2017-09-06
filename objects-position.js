//Write a function countLetters that can
//return to us all the unique characters that exist
//in a string that is passed into the function.

var lettersFunction = {
  //function to count characters
  countCharacterTypes: function(str) {
    var output = {};
    var propName;

    for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase();
      if (/[a-z]/.test(char) === false) {continue;}

      propName = char;

      if (output[propName] === undefined) {
      output[propName] = [];
      }

      output[propName].push(i);
    }

  return output;
  }
}

console.log(lettersFunction.countCharacterTypes("Alaska has many bears bear beats ..,,>>"));
