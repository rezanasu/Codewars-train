/*
    Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

    EXAMPLES

    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true
*/

function validParentheses(parens){
  //TODO 
  let valid = true;

  let symbols = {"(": ")"};
  let stack = [];

  for(let i = 0; i < parens.length; i++) {
    if(parens[i] === "(") {
      stack.push(parens[i]);
    } else {
      let last = stack.pop();
      if(parens[i] !== symbols[last]) {
        valid = false;
      }
    }
  }

  if(stack.length !== 0) {
    valid = false;
  }

  return valid;
}

console.log(validParentheses("())("));