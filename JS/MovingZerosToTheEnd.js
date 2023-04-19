function moveZeros(arr) {
    //the return val of the sort callbackfn determines how the array is sorted
    //if the return val is zero, the sort method keeps the order the same
    //if the return val is less than zero, it moves b AFTER a (and vice versa)
    //this will eval b, and if b is 0, it will keep moving b back until it reaches the end of the array
    return arr.sort((a, b) => b === 0 ? -1 : 0);
  }