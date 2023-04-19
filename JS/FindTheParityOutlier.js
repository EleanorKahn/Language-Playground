function findOutlier(integers){
    return (
      integers.slice(0, 3).reduce((acc, cur) => Math.abs(cur) % 2 === 0 ? acc + 1 : acc, 0) > 1
      ? integers.find((num) => Math.abs(num) % 2 === 1)
      : integers.find((num) => Math.abs(num) % 2 === 0)
    );
  };