//Write a function that returns each non-space/punctuation
//character with its corresponding positions within a string

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
      output[propName] = 0;
      }

      output[propName] += 1;
    }

  return output;
  }
}

console.log(lettersFunction.countCharacterTypes("Alaska has many bears bear beats"));