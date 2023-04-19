function queueTime(customers, n) {
  if (customers.length < 1) {
    return 0;
  } else if (n > customers.length) {
    return Math.max(...customers);
  } else {
    const linesArr = new Array(n).fill(0);
    customers.map((time, idx) => {
      let low = linesArr.indexOf(Math.min(...linesArr));
      linesArr[low] += customers[idx];
    });
    return Math.max(...linesArr);
    }
}