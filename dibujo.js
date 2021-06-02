var texto = document.getElementById("texto_lineas");
var color = document.getElementById('color_lineas');
var doton2 = document.gerElementById("botincito2");
boton.addEventListener('click', dibujo_por_click)
boton2.addEventListener('click', dibujo_por_click)
var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");
//estoy probando Git


function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial , yinicial );
    lienzo.lineTo(xfinal , yfinal);
    lienzo.stroke();
    lienzo.closePath();
}




function dibujo_por_click( )
{

var xxx = parseInt(texto.value);
var color_elegido = (texto.value);
var lineas = xxx;
var l = 0;
var yi , xf, yf, xi;
var espacio = 300/xxx
 
while color = rojo
{
     color_elegido = #ed1a1a
}

while color = azul
{
     color_elegido = #4054e6
}

while color = amarillo
{
      color_elegido = #fae84b
}

for(l=0; l < xxx; l++)
{ 
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea(color_elegido, 0, yi, xf, 300);
    console.log('xxx ' + l)

    yf = espacio * l;
    xi = espacio * (l+1);
    dibujarLinea(color_elegido, xi, 0, 300, yf);
    

}

dibujarLinea('#FAA', 1,1,1,299)
dibujarLinea('#FAA', 1,299,299,299)

}