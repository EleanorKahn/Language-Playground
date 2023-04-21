//Challenge from Codewars
//Answer by Eleanor

function solution(str){
    return [...str].map((char, idx) => str[idx+1] === undefined ? char += "_" : char += str[idx+1]).filter((pair, idx) => idx % 2 === 0);
  }