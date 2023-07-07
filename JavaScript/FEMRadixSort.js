/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.


*/

function radixSort(array) {
    // find number of places in the longest number
    const totalPlaces = getTotalPlaces(array);
    // create correct number of buckets 
    const buckets = new Array(10).fill().map(() => []);
    console.log(buckets);
    // because we're using base 10, 
    // it will be an array of 10 arrays
  
    // loop to iterate through for  
    // longest-number's-number-of-places times
    console.log(totalPlaces - 1);
    for (let i = totalPlaces - 1; i > -1; i--) {
        console.log("I am in the first for loop");
      // enqueue nums into their buckets for that place
      while (array.length) {
        const current = array.shift();
        console.log(current);
        buckets[getDigit(current, i, totalPlaces)].push(current);
        console.log("I am in the while loop");
        console.log(buckets);
      }
  
      // dequeue nums in bucket order 
      // and move to the next place up
      for (let j = 0; j < buckets.length; j++) {
        while (buckets[j].length) {
          array.push(buckets[j].shift());
        }
      }
    }
    return array;
  }
  
  // digit tells us what iteration
  // of the loop we're currently on 
  function getDigit(currentNum, currentPlace, totalPlaces) {
    const current = currentNum.toString();
    const size = current.length;
  
    const mod = totalPlaces - size;
    return current[currentPlace - mod] || 0;
  }
  
  function getTotalPlaces(numsArray) {
    
    const totalPlaces = numsArray.reduce((acc, cur) => {
      if (cur > acc) {
        acc = cur;
      }
      return acc;
    });
    return totalPlaces.toString().length;
  }

  

  const nums = [
    20,
    51,
    3,
    801,
    415,
    62,
    4,
    17,
    19,
    11,
    1,
    100,
    1244,
    104,
    944,
    854,
    34,
    3000,
    3001,
    1200,
    633,
  ];

  console.log(radixSort(nums));
  console.log(getTotalPlaces(nums));
  console.log(getDigit(20, 2, 4));
  
  // unit tests
  // do not modify the below code
//   test("radix sort", function () {
//     test("should sort correctly", () => {
//       const nums = [
//         20,
//         51,
//         3,
//         801,
//         415,
//         62,
//         4,
//         17,
//         19,
//         11,
//         1,
//         100,
//         1244,
//         104,
//         944,
//         854,
//         34,
//         3000,
//         3001,
//         1200,
//         633
//       ];
//       const ans = radixSort(nums);
//       expect(ans).toEqual([
//         1,
//         3,
//         4,
//         11,
//         17,
//         19,
//         20,
//         34,
//         51,
//         62,
//         100,
//         104,
//         415,
//         633,
//         801,
//         854,
//         944,
//         1200,
//         1244,
//         3000,
//         3001
//       ]);
//     });
//     test("should sort 99 random numbers correctly", () => {
//       const fill = 99;
//       const nums = new Array(fill)
//         .fill()
//         .map(() => Math.floor(Math.random() * 500000));
//       const ans = radixSort(nums);
//       expect(ans).toEqual(nums.sort());
//     });
//   });