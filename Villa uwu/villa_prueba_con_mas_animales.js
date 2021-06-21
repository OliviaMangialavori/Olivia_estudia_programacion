var vp = document.getElementById("villaPrueba");
var papel = vp.getContext("2d");


var x = aleatorio(0, 420);
var y = aleatorio(0, 420);



var pollo = {
  url: "pollo.webp",
  cargaOK: false
};


var cerdo = {
    url: "cerdo.webp",
    cargaOK: false
  };

  
  var vaca = {
    url: "vaca.webp",
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



cerdo.Imagen = new Image();
cerdo.Imagen.src = cerdo.url;
cerdo.Imagen.addEventListener("load", cargarCerdos);

vaca.Imagen = new Image();
vaca.Imagen.src = vaca.url;
vaca.Imagen.addEventListener("load", cargarVacas);



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





function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar()
}

function cargarVacas()
{
  vaca.cargaOK = true;
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



  if (cerdo.cargaOK)
  {
    papel.drawImage(cerdo.Imagen, y, x );
  }

  if (vaca.cargaOK)
  {
    papel.drawImage(vaca.Imagen, y, y );
  }

}





function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}