const imgs = document.getElementById('imgs');
const imgCount = document.querySelectorAll('#imgs img');
let index = 0;

function run() {
    index++;
    if (index > imgCount.length - 1) {
        index = 0;
    }
    imgs.style.transform = `translateX(${-index * 1280}px)`;
}
setInterval(run, 5500);