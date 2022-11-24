var mouseEvent = "empty";
var current_x_position, current_y_position;
var last_x_position, last_y_position;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color;
var width;
var radius;

document.getElementById("colorInput").value = "black";
document.getElementById("widthInput").value = 1;
document.getElementById("radiusInput").value = 10;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) 
{
    color = document.getElementById("colorInput").value;
    width = document.getElementById("widthInput").value;
    radius = document.getElementById("radiusInput").value;
    mouseEvent = "mousedown";
    circle(current_x_position , current_y_position);
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) 
{
    mouseEvent = "mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) 
{
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) 
{
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") 
    {
        console.log("x = " + current_x_position + "|y = " + current_y_position);
        ctx.lineTo(current_x_position, current_y_position);
         circle(current_x_position , current_y_position);
    }
    last_x_position = current_x_position;
    last_y_position = current_y_position;
}

function circle(current_x_position , current_y_position)
 {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_x_position, current_y_position, radius, 0, 2 * Math.PI);
    ctx.stroke();
 }

