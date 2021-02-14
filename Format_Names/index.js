/*
    Given: an array containing hashes of names

    Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'

    list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'

    list([ {name: 'Bart'} ])
    // returns 'Bart'

    list([])
    // returns ''
*/


function list(names){
  //your code here
  if(names.length === 0) {
      return "";
  }

  let result = "";

  console.log(names.length);
  for(let i = 0; i < names.length; i++) {
      if((i+1) === names.length - 1) {
        result += `${names[i].name} & `;
      } else if(i === names.length - 1) {
        result += `${names[i].name}`;
      } else {
        result += `${names[i].name}, `;
      }
  }

  return result;
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'