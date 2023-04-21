//Challenge from Codewars
//Answer by Eleanor

var uniqueInOrder=function(iterable){
    //spread will spread string into iterable array of chars, if iterable is type String
    return [...iterable].filter((unique, idx) => unique !== iterable[idx+1]);
  }