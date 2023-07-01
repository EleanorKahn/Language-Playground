var checkIfExist = function(arr) {
    //find 2 indecies where:
    //i and j are different indecies
    // i is greater than -1, and j is less than the length of the array
    //the value at index i is exactly double the value at index j
    
    //look at each value in the array 
    //compare it to each other value in the array 
    
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
        for (let j = 0; j < arr.length; j++) {
            console.log(i);
            console.log(j);
            if (arr[i] === 2 * arr[j]) {
                console.log(i);
                console.log(j);
                return true;
            }
        };
    };
        
};

checkIfExist([10, 2, 5, 3]);