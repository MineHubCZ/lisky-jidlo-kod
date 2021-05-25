/**
 * © CoolFido 2021
 * Je to microapp, netřeba používat Vue a vanilla JS celkem funguje, takže cajk.
 * Sorry, Mio.
 */

var can = document.getElementById('canvas');
let ctx = can.getContext('2d');

var pfp = document.getElementById('pfp');
var act = document.getElementById('act');
var dnl = document.getElementById('dnl');

var fix = new Image();
fix.src = 'fixxy889.png';

pfp.addEventListener('change', () => {
    act.style.display = 'block';
    dnl.style.display = 'none';

    ctx.globalAlpha = 1;
    
    var img = new Image();
    img.src = URL.createObjectURL(pfp.files[0]);

    console.log(img);
    setTimeout(() => ctx.drawImage(img, 0, 0, 256, 256), 100);
});

act.addEventListener('click', () => {
    ctx.globalAlpha = 0.5;
    ctx.drawImage(fix, 0, 0, 256, 256);

    act.style.display = 'none';
    dnl.style.display = 'block';
});

dnl.addEventListener('click', () => {
    download(can.toDataURL(), 'fixified.png', 'image/png');
});