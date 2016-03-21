function merge(arrA,arrB){
  var aCount = 0,
      bCount = 0,
      result = [];
  while(aCount<arrA.length && bCount<arrB.length){
    if(arrA[aCount]>arrB[bCount]){
      result.push(arrB[bCount]);
      bCount++;
    }else if(arrA[aCount]===arrB[bCount]){
      result.push(arrB[bCount]);
      bCount++;
      aCount++;
    }else{
      result.push(arrA[aCount]);
      aCount++;
    }
  }
  if(arrA.length > aCount){
    result = result.concat(arrA.slice(aCount,arrA.length));
  }else if(arrB.length > bCount){
    result = result.concat(arrB.slice(bCount,arrB.length));
  }
  
  return result;
}
