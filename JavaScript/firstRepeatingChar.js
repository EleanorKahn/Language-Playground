//Challenge by Patrick F.
//Solution by Eleanor

// given a string as param, returns the first repeating letter 
// iterate through the string
// store chars in a way that lets me compare to current iterated value 
// return first repeating char
// return first => array.find

// do this declaratively with reduce 

function findSecondRepeat(repeat) {
    
}

// this is O(n) 
const findFirstRepeat = (repeat) => {
    //const arrString = [...repeat];
    const seen = {};
    // let unique = "";
    for (const char of repeat) {
        console.log(`we are in the loop! ${char}`);
        // using a hashtable is O(1), vs searching through the whole string 
        // using hashtables and objects to compare values, vs iterating through arrays (includes)
         if (seen[char]) {
            console.log(`we have seen a repeating character!`);
            return char;
         } 
         seen[char] = char;
    };
};

console.log(findFirstRepeat("repeata"));