/* Stack */

// functions: push, pop, peek, length
var letters = [];
var word = "something";
var rword = "";

// put letter into the stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " isn't a palindrome");
}