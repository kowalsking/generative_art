/*
    TILED LINES
*/

// function tiledLines() {
//     const canvas = document.querySelector('canvas');
//     const text = document.querySelector('#rgb-text');
//     const ctx = canvas.getContext('2d');
//
//     const size = 400;
//         // window.innerWidth/2;
//     const dpr = window.devicePixelRatio;
//
//     canvas.width = size * dpr;
//     canvas.height = size * dpr;
//
//     ctx.scale(dpr, dpr);
//     ctx.lineWidth = 2;
//
//     let step = 15;
//     let clr = randRGB();
//
//     for (let x = 0; x < size; x += step) {
//         for (let y = 0; y < size; y += step) {
//             ctx.fillRect(0,0, size, size);
//             ctx.fillStyle = clr;
//             draw(x, y, step, step);
//         }
//     }
//
//     function draw(x, y, width, height, color) {
//         let leftToRight = Math.random() >= 0.5;
//         if (leftToRight) {
//             ctx.moveTo(x, y);
//             ctx.lineTo(x + width, y + height);
//         } else {
//             ctx.moveTo(x + width, y);
//             ctx.lineTo(x, y + height);
//         }
//         ctx.stroke();
//     }
//
//     function randRGB() {
//         let r,g,b,rgb;
//         r = Math.floor(Math.random()*256);
//         g = Math.floor(Math.random()*256);
//         b = Math.floor(Math.random()*256);
//         rgb = `rgb(${r},${g},${b})`;
//         text.textContent = rgb;
//         return rgb;
//     }
// }

/*
    JOY DIVISION
*/

// function joyDivision() {
//     const canvas = document.querySelector('canvas');
//     const text = document.querySelector('#rgb-text');
//     const ctx = canvas.getContext('2d');
//
//     const size = 400;
//         // window.innerWidth/2;
//     const dpr = window.devicePixelRatio;
//
//     canvas.width = size * dpr;
//     canvas.height = size * dpr;
//
//     const step = 10;
//     const lines = [];
//
//     createLines();
//     draw();
//
//     // create the lines
//     function createLines() {
//         for (let i = step; i <= size - step; i += step) {
//             const line = [];
//             for (let j = step; j <= size - step; j += step) {
//                 let distanceToCenter = Math.abs(j - size / 2);
//                 let variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
//                 let random = Math.random() * variance / 2 * -1;
//                 let point = {x: j, y: i + random};
//                 line.push(point);
//             }
//             lines.push(line);
//         }
//     }
//
//     // do the drawing
//     function draw() {
//         for (let i = 5; i < lines.length-4; i++) {
//             ctx.beginPath();
//             ctx.moveTo(lines[i][0].x, lines[i][0].y);
//
//             for (var j = 0; j < lines[i].length - 2; j++) {
//                 var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
//                 var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
//                 ctx.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
//             }
//
//             ctx.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
//             ctx.save();
//             ctx.globalCompositeOperation = 'destination-out';
//             ctx.fill();
//             ctx.restore();
//             ctx.stroke();
//         }
//     }
// }

/*
   CUBIC DISARRAY
*/

// function cubicDisarray() {
//     const canvas = document.querySelector('canvas');
//     const text = document.querySelector('#rgb-text');
//     const ctx = canvas.getContext('2d');
//
//     const size = 320;
//     // window.innerWidth/2;
//     const dpr = window.devicePixelRatio;
//
//     canvas.width = size * dpr;
//     canvas.height = size * dpr;
//
//     ctx.lineWidth = 2;
//     ctx.scale(dpr, dpr);
//
//     let squareSize = 30;
//     let randomDisplacement = 15;
//     let rotateMultiplier = 20;
//     let offset = 10;
//
//     function draw(width, height) {
//         ctx.beginPath();
//         ctx.rect(-width/2, -height/2, width, height);
//         ctx.fillStyle = randRGB();
//         ctx.fillRect(-width/2, -height/2, width, height);
//         ctx.stroke();
//     }
//
//     function randRGB() {
//         let r, g, b, rgb;
//         r = Math.floor(Math.random()*256);
//         g = Math.floor(Math.random()*256);
//         b = Math.floor(Math.random()*256);
//         rgb = `rgb(${r},${g},${b})`;
//         // text.textContent = rgb;
//         return rgb;
//     }
//
//     for (let i = squareSize; i <= size - squareSize ; i+=squareSize) {
//         for (let j = 10; j <= size - squareSize; j+=squareSize) {
//             let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
//             let rotateAmt = j / size * Math.PI / 180 * plusOrMinus * Math.random() * rotateMultiplier;
//             plusOrMinus = Math.random() < 0.5 ? -1 : 1;
//             let translateAmt = j / size * plusOrMinus * Math.random() * randomDisplacement;
//
//             ctx.save();
//             ctx.translate(i + translateAmt + offset, j + offset);
//             ctx.rotate(rotateAmt);
//             draw(squareSize, squareSize);
//             ctx.restore();
//         }
//     }
// }

/*
    TRINGULAR MESH
*/

function tringularMesh() {
    const canvas = document.querySelector('canvas');
    const text = document.querySelector('#rgb-text');
    const ctx = canvas.getContext('2d');

    const size = 320;
    const dpr = window.devicePixelRatio;

    canvas.width = size * dpr;
    canvas.height = size * dpr;

    ctx.lineWidth = 2;
    ctx.scale(dpr, dpr);
    ctx.lineJoin = 'bevel';

    let line, dot, odd = false,
        lines = [],
        gap = size / 8;

    for (let y = gap / 2; y <= size ; y += gap) {
        odd = !odd;
        line = [];
        for (let x = gap / 4; x <= size; x += gap) {
            dot = {x: x + (odd ? gap/2 : 0), y: y};
            line.push({
                x: x + (Math.random()*.8 - .4) * gap + (odd ? gap / 2 : 0),
                y: y + (Math.random()*.8 - .4) * gap
            });
            ctx.fill();
        }
        lines.push(line);
    }

    function drawTriangle(pointA, pointB, pointC) {
        ctx.beginPath();
        ctx.moveTo(pointA.x, pointA.y);
        ctx.lineTo(pointB.x, pointB.y);
        ctx.lineTo(pointC.x, pointC.y);
        ctx.lineTo(pointA.x, pointA.y);
        ctx.closePath();
        let gray = Math.floor(Math.random() * 16).toString(16);
        ctx.fillStyle = '#' + gray + gray + gray;
        ctx.fill();
        ctx.stroke();
    }

    let dotLine;
    odd = true;

    for(let y = 0; y < lines.length -1; y++) {
        odd = !odd;
        dotLine = [];
        for (let i = 0; i < lines[y].length; i++) {
            dotLine.push(odd ? lines[y][i] : lines[y+1][i]);
            dotLine.push(odd ? lines[y+1][i] : lines[y][i]);
        }
        for (let i = 0; i < dotLine.length - 2; i++) {
            drawTriangle(dotLine[i], dotLine[i+1], dotLine[i+2]);
        }
    }


}

document.addEventListener('DOMContentLoaded', tringularMesh);
