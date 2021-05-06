function camelize(str) {
  if (str === '') {
    return '';
  }
  return str.split('-').map(function(item, index) {
    if (index !== 0) {
      return item[0].toUpperCase() + item.slice(1);
    } else {
      return item;
    }
  }).join('');
}
