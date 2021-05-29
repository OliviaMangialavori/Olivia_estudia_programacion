var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");
boton.addEventListener("click", dibujo_por_click);
var ancho = d.width;



//hola dsdfdfsd vfdfdsdsdsdahfkjhsdf


function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial , yinicial );
    lienzo.lineTo(xfinal , yfinal);
    lienzo.stroke();
    lienzo.closePath();
}




function dibujo_por_click()
{
 
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
colorcito = "#dcc6f7"
var espacio = 300 / lineas;

for(l = 0; l < lineas; l++)
{ 
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log('xxx ' + l)

}

dibujarLinea('#FAA', 1,1,1,299)
dibujarLinea('#FAA', 1,299,299,299)
}