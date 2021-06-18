var teclas = {
    UP: 38,
    DOWN:40, 
    LEFT:37,
    RIGHT:39
    
} 


document.addEventListener('keyup', dibujarConElTeclado);
var cuadrito = document.getElementById('espacioDeDibujo');
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea ("#cc7078", 149, 149, 151, 151, papel);

function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3
    lienzo.moveTo(xinicial , yinicial );
    lienzo.lineTo(xfinal , yfinal);
    lienzo.stroke();
    lienzo.closePath();
}






function dibujarConElTeclado(evento)
{
    colorcito = "#ffbdc3"
    avanza = 4

    switch(evento.keyCode)
    {
        case teclas.DOWN:
            dibujarLinea ("#cc7078", x, y, x, y + avanza, papel);
            y = y + avanza

        break;

        case teclas.UP:
            dibujarLinea ("#cc7078", x, y, x, y - avanza, papel);
            y = y - avanza

            break;
    

            case teclas.LEFT:
                dibujarLinea ("#cc7078", x, y, x - avanza , y, papel);
                x = x - avanza
            
                break;

                
                case teclas.RIGHT:
                    dibujarLinea ("#cc7078", x, y, x + avanza , y, papel);
                    x = x + avanza
                        
                    break;
            
    }
}






