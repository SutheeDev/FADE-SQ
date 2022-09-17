const container = document.querySelector('.container')
let rowHtml = '';

for (i = 0; i < 10; i++) {
    let squareHtml = '';
    for (j = 0; j < 10; j++) {
        squareHtml += `<div class="square"></div>`;
    }
    rowHtml += `<div class="row">${squareHtml}</div>`;
}
container.innerHTML = rowHtml;