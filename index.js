const container = document.querySelector('.container')
let rowHtml = '';

// Create row and column of squares
for (i = 0; i < 10; i++) {
    let squareHtml = '';
    for (j = 0; j < 10; j++) {
        squareHtml += `<div class="square"></div>`;
    }
    rowHtml += `<div class="row">${squareHtml}</div>`;
}
container.innerHTML = rowHtml;

// Square animation
const square = document.querySelectorAll('.square');
gsap.from(square, {
    opacity: 0.1,
    ease: 'linear',
    repeat: -1,
    yoyo: true,
    stagger: {
        amount: 3,
        from: 'edges',
    }
}, '+=0.5') 