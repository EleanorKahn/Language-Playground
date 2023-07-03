/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
    //base case, return nums if length 1 or 0
    if (nums.length < 2) {
      return nums;
    }
    //break into two smaller arrays...
    const middle = Math.floor(nums.length / 2);
    const array1 = nums.slice(0, middle);
    const array2 = nums.slice(middle);
  
    //until they each have length 1
    const sorted1 = mergeSort(array1);
    const sorted2 = mergeSort(array2);
  
    //call merge sort on left and right 
    return merge(sorted1, sorted2);
  };
  
  const merge = (left, right) => {
    //return one sorted array
    const result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }
  
  // unit tests
  // do not modify the below code
  test.skip("merge sort", function () {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const ans = mergeSort(nums);
    expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  