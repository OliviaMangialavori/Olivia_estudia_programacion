var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");
var ancho = d.width;


var rosa = document.getElementById("rosita");
var violeta = document.getElementById("violetita");
var amarillo = document.getElementById("amarillito");
var verde = document.getElementById("verdecito");

rosa.addEventListener("click", dibujo_por_click_rosa);
violeta.addEventListener("click", dibujo_por_click_violeta);
amarillo.addEventListener("click", dibujo_por_click_amarillo);
verde.addEventListener("click", dibujo_por_click_verde);


function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial , yinicial );
    lienzo.lineTo(xfinal , yfinal);
    lienzo.stroke();
    lienzo.closePath();
}




function dibujo_por_click_rosa()
{
 
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var espacio = 300 / lineas;



for(l = 0; l < lineas; l++)
{ 
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#eb9da8", 0, yi, xf, 300);
    console.log('xxx ' + l)

}

dibujarLinea("#eb9da8", 1,1,1,299)
dibujarLinea(1,299,299,299)
}



function dibujo_por_click_amarillo()
{
 
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var espacio = 300 / lineas;



for(l = 0; l < lineas; l++)
{ 
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#f5f17f", 0, yi, xf, 300);
    console.log('xxx ' + l)

}

dibujarLinea("#f5f17f", 1,1,1,299)
dibujarLinea(1,299,299,299)
}



function dibujo_por_click_violeta()
{
 
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var espacio = 300 / lineas;



for(l = 0; l < lineas; l++)
{ 
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#7e4694", 0, yi, xf, 300);
    console.log('xxx ' + l)

}

dibujarLinea("#7e4694", 1,1,1,299)
dibujarLinea(1,299,299,299)
}



function dibujo_por_click_verde()
{
 
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var espacio = 300 / lineas;



for(l = 0; l < lineas; l++)
{ 
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#92f274", 0, yi, xf, 300);
    console.log('xxx ' + l)

}

dibujarLinea("#92f274", 1,1,1,299)
dibujarLinea(1,299,299,299)
}