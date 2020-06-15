const colors = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    head.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

const head = document.querySelector('.head');
const body = document.querySelector('.body');
const pointL = document.querySelector('.pointL');
const pointR = document.querySelector('.pointR');

head.addEventListener('click', colors);
body.addEventListener('click', colors);

////////////////////////////////////////

document.addEventListener('mousemove', () => {
    document.querySelector('span').textContent = `X = ${event.pageX}; Y = ${event.pageY}`;

    //if (event.pageY > 110 && event.pageY < 130)
    pointL.style.top = `${event.pageY*0.07}px`
    pointR.style.top = `${event.pageY*0.07}px`
    pointL.style.left = `${event.pageX*0.05}px`
    pointR.style.left = `${event.pageX*0.05}px`
});