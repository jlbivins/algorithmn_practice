const array = [1,6,3,4,5,6,7,8,9,10,11,12,13,14,1,35]

const diagonals = (arr) => {
  const matrixDim = Math.sqrt(arr.length);
  const arrs = [];

  for(let i = 0; i < arr.length; i+=matrixDim ){
      arrs.push(arr.slice(i, i + matrixDim))
  }
  
  let diag1 = 0;
  let diag2 = 0;

  for(let i =0; i < arrs.length; i++){
      diag1 += arrs[1][i]
      diag2 += arrs[i][arrs.length - i 1 ]
  }
}

