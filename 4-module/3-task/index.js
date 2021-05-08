function highlight(table) {
  for (const r of table.rows) {
    for (const cell of r.cells) {
      if (cell.dataset.available === 'true') {
        cell.parentNode.classList.replace('hidden', 'available');
      } else if (cell.dataset.available === 'false') {
        cell.parentNode.classList.replace('hidden', 'unavailable');
      } else {
        cell.parentNode.classList.add('hidden');
      }
      if ((cell.cellIndex === 2) && (cell.innerText === 'm')) {
        cell.parentNode.classList.add("male");
      }
      if ((cell.cellIndex === 2) && (cell.innerText === 'f')) {
        cell.parentNode.classList.add("female");
      }
      if ((cell.cellIndex === 1) && (cell.innerText < 18 )) {
        cell.parentNode.style.textDecoration = 'line-through';
      }
    }
  }
}
