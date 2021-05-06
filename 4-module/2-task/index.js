function makeDiagonalRed(table) {
  for (const r of table.rows) {
    for (const cell of r.cells) {
      const x = cell.innerHTML.charAt(0);
      const y = cell.innerHTML.charAt(2);
      if (x === y) {
        cell.style.backgroundColor = 'red';
      }
    }
  }
}
