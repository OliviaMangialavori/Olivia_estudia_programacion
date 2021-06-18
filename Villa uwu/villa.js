var vp = document.getElementById("villauwu");
var papel = vp.getContext("2d");


var x = aleatorio(0, 420);
var y = aleatorio(0, 420);



var pollo = {
  url: "pollo.webp",
  cargaOK: false
};

var fondo ={
  url:"tile.webp",
  cargaOK: false
};

fondo.Imagen = new Image();
fondo.Imagen.src = fondo.url;
fondo.Imagen.addEventListener("load", cargarFondo);


pollo.Imagen = new Image();
pollo.Imagen.src = pollo.url;
pollo.Imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar()
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar()
}

function dibujar()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.Imagen, 0, 0 );
  }

  if (pollo.cargaOK)
  {
    papel.drawImage(pollo.Imagen, x, y );
  }

}





function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}