// Tiled Lines

function tiledLines() {
    const canvas = document.querySelector('canvas');
    const text = document.querySelector('#rgb-text');
    const ctx = canvas.getContext('2d');

    const size = 400;
        // window.innerWidth/2;
    const dpr = window.devicePixelRatio;

    canvas.width = size * dpr;
    canvas.height = size * dpr;

    ctx.scale(dpr, dpr);
    ctx.lineWidth = 2;

    let step = 15;
    let clr = randRGB();

    for (let x = 0; x < size; x += step) {
        for (let y = 0; y < size; y += step) {
            ctx.fillRect(0,0, size, size);
            ctx.fillStyle = clr;
            draw(x, y, step, step);
        }
    }

    function draw(x, y, width, height, color) {
        let leftToRight = Math.random() >= 0.5;
        if (leftToRight) {
            ctx.moveTo(x, y);
            ctx.lineTo(x + width, y + height);
        } else {
            ctx.moveTo(x + width, y);
            ctx.lineTo(x, y + height);
        }
        ctx.stroke();
    }

    function randRGB() {
        let r,g,b,rgb;
        r = Math.floor(Math.random()*256);
        g = Math.floor(Math.random()*256);
        b = Math.floor(Math.random()*256);
        rgb = `rgb(${r},${g},${b})`;
        text.textContent = rgb;
        return rgb;
    }
}

document.addEventListener('DOMContentLoaded', tiledLines);