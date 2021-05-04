function camelize(str) {
  if (str === '') {
    return '';
  }
  //  не соображу, как оставить первую букву первого слова маленькой
  let arr = str.split('-');
  console.log('arr-> ', arr);
  let newArr = arr.map(item => {
    const firstChar = item[0].toUpperCase();
    return firstChar + item.slice(1);
  });
  let result = newArr.join('');
  console.log("result-> ", result);
  return result;
}
