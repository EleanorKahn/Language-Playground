//Challenge from Codewars
//Answer by Eleanor

// Return the nth triangular number
function triangular( n ) {
    return (
      n > 0
        ? n * (n + 1) / 2
        : 0
    );
  };