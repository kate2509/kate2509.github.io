const canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = 'lightgray'
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'green';
ctx.fillRect(10, 20, 50, 70);

ctx.font = `20px Arial`;
ctx.fillStyle = 'blue';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('Hello, World', 150, 150);

ctx.strokeStyle = 'yellow';
ctx.lineWidth = 5;
ctx.strokeRect(10, 20, 50, 70);

ctx.strokeStyle = 'red'
ctx.linewidth = 5
ctx.beginPath()//начало пути
ctx.moveTo(10, 10)//ставим карандаш в точку 10, 10 пикселей
ctx.lineTo(290, 10)//чертим прямую до точки 290 вправо и 10 вниз пикселей
ctx.lineTo(10, 290)//чертим прямую до точки 10 вправо и 290 вниз пикселей
ctx.stroke()//линия появляется на экране
ctx.lineTo(290,290)

canvas.addEventListener('click', drawRect);

function drawRect(event)
{
	ctx.fillStyle = 'red';
	ctx.fillRect(event.offsetX, event.offsetY, 5, 5);
}



