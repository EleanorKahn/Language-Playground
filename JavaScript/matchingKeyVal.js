// given array of keys and an array of values (of same size)
// output an object that matches each key to each value based on idx
// create a new object to store key value pairs 
// go through each/both 
// use hashtables to associate each key with each value 


function matchKeyVal(arrKeys, arrVals) {
    return arrKeys.reduce((acc, key, idx) => ({...acc, [key]: arrVals[idx]}), {});
}

console.log(matchKeyVal(["dog", "color", "height", "age"], ["Frodo", "black", "short", "16"]));

// return array of objects flattened into one object, using arr.reduce()
function flattenArr(arrObjects) {
    return arrObjects.reduce((acc, cur) => ({...acc, ...cur}), {});
}

console.log(flattenArr([{"foo": "bar", "Frodo": "isCute"}, {"bar": "foo"}]));
// { "foo": "bar", "bar": "foo" };

// Now try with nested objects 
// { "foo": {"foo": "bar", "Frodo": "dog"}, {"bar": "foo"}}