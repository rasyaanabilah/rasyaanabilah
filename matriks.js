function calculate(operation) {
    const a = [
        [parseFloat(document.getElementById('a11').value), parseFloat(document.getElementById('a12').value)],
        [parseFloat(document.getElementById('a21').value), parseFloat(document.getElementById('a22').value)]
    ];
    const b = [
        [parseFloat(document.getElementById('b11').value), parseFloat(document.getElementById('b12').value)],
        [parseFloat(document.getElementById('b21').value), parseFloat(document.getElementById('b22').value)]
    ];
    let result = [[0, 0], [0, 0]];

    if (operation === 'add') {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
    } else if (operation === 'subtract') {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                result[i][j] = a[i][j] - b[i][j];
            }
        }
    } else if (operation === 'multiply') {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                result[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
            }
        }
    }

    displayResult(result);
}

function displayResult(result) {
    let resultHTML = '<h3>Hasil</h3><table>';
    for (let i = 0; i < 2; i++) {
        resultHTML += '<tr>';
        for (let j = 0; j < 2; j++) {
            resultHTML += `<td><div class="result-cell">${result[i][j]}</div></td>`;
        }
        resultHTML += '</tr>';
    }
    resultHTML += '</table>';
    document.getElementById('result').innerHTML = resultHTML;
}
