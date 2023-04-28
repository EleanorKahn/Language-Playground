/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
  var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var numGuess = 0;
    
    while (max >= min) {
        numGuess++;
        guess = Math.floor((min + max) / 2);
        if (array[guess] === targetValue) {
            console.log(guess);
            console.log(numGuess);
            return guess;
        } else if (array[guess] > targetValue) {
            console.log(guess);
            max = guess - 1;
        } else {
            console.log(guess);
            min = guess + 1;
        }
        
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
var result2 = doSearch(primes, 93);
console.log("Found prime at index " + result);
console.log("Found prime (or not) at index " + result2);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 89), 23);
Program.assertEqual(doSearch(primes, 19), 7);
//num guesses is at most logbase2n + 1