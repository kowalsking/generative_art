/*
    TILED LINES
*/


// function tiledLines() {
//     console.log('This is generation art.\n Tiled Lines.');
// function tiledLines() {
//     const canvas = document.querySelector('canvas');
//     const text = document.querySelector('#rgb-text');
//     const ctx = canvas.getContext('2d');

//     const size = 400;
//         // window.innerWidth/2;
//     const dpr = window.devicePixelRatio;

//     canvas.width = size * dpr;
//     canvas.height = size * dpr;

//     ctx.scale(dpr, dpr);
//     ctx.lineWidth = 2;

//     let step = 15;
//     let clr = randRGB();

//     for (let x = 0; x < size; x += step) {
//         for (let y = 0; y < size; y += step) {
//             ctx.fillRect(0,0, size, size);
//             ctx.fillStyle = clr;
//             draw(x, y, step, step);
//         }
//     }

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

function joyDivision() {
    const canvas = document.querySelector('canvas');
    const text = document.querySelector('#rgb-text');
    const ctx = canvas.getContext('2d');

    const size = 400;
        // window.innerWidth/2;
    const dpr = window.devicePixelRatio;

    canvas.width = size * dpr;
    canvas.height = size * dpr;

    const step = 10;
    const lines = [];

    createLines();
    draw();

    // create the lines
    function createLines() {
        for (let i = step; i <= size - step; i += step) {
            const line = [];
            for (let j = step; j <= size - step; j += step) {
                let distanceToCenter = Math.abs(j - size / 2);
                let variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
                let random = Math.random() * variance / 2 * -1;
                let point = {x: j, y: i + random};
                line.push(point);
            }
            lines.push(line);
        }
    }

    // do the drawing
    function draw() {
        for (let i = 5; i < lines.length-4; i++) {
            ctx.beginPath();
            ctx.moveTo(lines[i][0].x, lines[i][0].y);

            for (var j = 0; j < lines[i].length - 2; j++) {
                var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
                var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
                ctx.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
            }

            ctx.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
            ctx.save();
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fill();
            ctx.restore();
            ctx.stroke();
        }
    }


}

document.addEventListener('DOMContentLoaded', joyDivision);
