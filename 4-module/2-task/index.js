function makeDiagonalRed(table) {
  Array.from(table.rows).forEach((tableRow, rowIndex) => {
    Array.from(tableRow.cells).forEach((cell, cellIndex) => {
      if (rowIndex === cellIndex) {
        cell.style.backgroundColor = 'red';
      }
    });
  });
}
