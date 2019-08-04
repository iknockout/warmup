// Create a HTML element to display JavaScript function's output.

const outputElement = document.createElement("p");
document.body.appendChild(outputElement);

// Write the following functions and display their output on the HTML page:

/* Write a function canIVote() that takes in a number, representing the person’s age, and returns
 * the boolean true if they are 18 years old or older, and the boolean false if they are not.
 */
function canIVote(num) {
  if (num >= 18) {
    return true;
  } else {
    return false;
  }
}

outputElement.innerHTML = canIVote(18);


/* Write a function, agreeOrDisagree(), that takes in two strings, and returns ‘You agree!’
 * if the two strings are the same and ‘You disagree!’ if the two strings are different.
 */
// Using ECMAScript 2015 arrow notation
const agreeOrDisagree = (str1, str2) => {
  if ( str1.toLowerCase() == str2.toLowerCase() ) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};


/* Write a function, reportingForDuty(), that has two string parameters, rank and lastName,
 * and returns a string in the following format: ‘rank lastName reporting for duty!’
 */
function reportingForDuty(rank, lastName) {
  return rank + " " + lastName + " reporting for duty!";
  // or return `${rank} ${lastName} reporting for duty!`;
}


/* Write a function, truthyOrFalsy(), that takes in any value and returns true if that value
 * is truthy and false if that value is falsy.
 */
const truthyOrFalsy = (val) => {
  return (val ? true : false);
}

/* Note that in JS, falsy values are:
 * false
 * 0 (or other forms of the number 0, -0, 0.0, etc)
 * empty strings ('', "", etc)
 * null
 * undefined
 * NaN
 * truthy values are:
 * non-empty strings (like "false", ' ' - including strings with just whitespace)
 * -1 (or other negative and non-zero numbers)
 * {} (empty objects)
 * [] (empty arrays)
 * function(){}, () => {} (functions, including empty functions)
 * "0" == 0  //evaluates to true
 */


/* A person’s number of imaginary friends are always 33% of their total friends.
 * Write a function, numImaginaryFriends(), that takes in the total number of friends a person has
 * and returns the number of imaginary friends they have.
 * Since friends can only come in whole numbers, be sure to round your result before returning it.
 */
function numImaginaryFriends(numFriends) {
  return Math.round( numFriends * 0.33 );
}

outputElement.innerHTML = numImaginaryFriends(100);


/* Create a function, tipCalculator(), that has two parameters, a string representing the quality of
 * the service received and a number representing the total cost.
 */
const tipCalculator = (quality, totalCost) => {
  switch ( quality.toLowerCase() ) {
    case 'bad':
      return totalCost * 0.05;
    case 'ok':
      return totalCost * 0.15;
    case 'good':
      return totalCost * 0.2;
    case 'excellent':
      return totalCost * 0.3;
    default:
      return totalCost * 0.18;
  }
};


/* Create a HTML button and when clicked, it will execute the following function:
   reverseArray( ['sense.','make', 'all', 'will', 'This'] );
   reverseArray() takes in an array as an argument and returns a new array with the elements
   in the reverse order.  Do not use built-in method for this exercise.
 */
function reverseArray(arr) {
  console.log("Input:", arr);
  let newArr = [];
  for ( let k = arr.length-1; k >=0 ; k-- ) {
    newArr.push(arr[k]);
  }
  return newArr;
}

const buttonElement = document.createElement("button");
buttonElement.innerHTML = "Click me";
document.body.appendChild(buttonElement);
buttonElement.onclick = event => {
  outputElement.innerHTML = reverseArray( ['sense.','make', 'all', 'will', 'This'] );
};

