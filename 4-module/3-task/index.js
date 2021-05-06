function highlight(table) {
  for (const r of table.rows) {
    for (const cell of r.cells) {
      cell.parentNode.classList.add('hidden');
      if (cell.dataset.available === 'true') {
        cell.parentNode.classList.replace('hidden', 'available');
      }
      if (cell.dataset.available === 'false') {
        cell.parentNode.classList.replace('hidden', 'unavailable');
      }
      if ((cell.cellIndex === 2) && (cell.innerText === 'm')) {
        cell.parentNode.classList.add("male");
      }
      if ((cell.cellIndex === 2) && (cell.innerText === 'f')) {
        cell.parentNode.classList.add("female");
      }
      if ((cell.cellIndex === 1) && (cell.innerText < 18 )) {
        cell.parentNode.setAttribute('style','text-decoration: line-through');
      }
    }
  }
}

// switch (cell.dataset.available) {
// case 'true':
//   cell.parentNode.classList.add('available');
//   break;
// case 'false':
//   cell.parentNode.classList.add('unavailable');
//   break;
// default:
//   cell.parentNode.classList.add('hidden');
// }
