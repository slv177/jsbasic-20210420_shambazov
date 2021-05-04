function getMinMax(str) {
  const splitArray = str.split(' ').join(',').split(',');
  const filteredArray = splitArray.filter(Number);

  return {
    min: Math.min(...filteredArray),
    max: Math.max(...filteredArray)
  };
}


