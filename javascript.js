const makeGrid = (rows, columns) => {
    if (!validInput(rows, columns)) return;
    const container = document.getElementById('grid');
    container.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        container.appendChild(row(i, columns));
    }
}

const row = (rowNumber, columns) => {
    const row = document.createElement('DIV');
    row.className = 'row';
    for (let i = 0; i < columns; i++) {
        row.appendChild(cell(rowNumber, i));
    }
    return row;
}

const cell = (row, col) => {
    const cell = document.createElement('DIV');
    cell.className = 'cell';
    cell.addEventListener('click', function(e) {
        e.target.style.backgroundColor = 'dodgerblue';
        document.getElementById('row').innerHTML = `row: ${row}`;
        document.getElementById('col').innerHTML = `col: ${col}`;
    })
    return cell;
}

const validInput = (rows, columns) => rows <= 50 && columns <= 50;

const validate = element => {
    console.log(typeof (element.value * 10));
    if (element.value > 50 || typeof (element.value * 10) !== 'number') {
        element.nextSibling.nextSibling.innerHTML = 'Bad input. Try again'
    } else {
        element.nextSibling.nextSibling.innerHTML = '';
    }
}