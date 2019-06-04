document.getElementById('intro').style.display = 'block';
document.getElementById('menu').style.display = 'none'

//pag de inicio
document.getElementById("introduccion").innerHTML = "CLASIFICADO"
document.getElementById("objetivo").innerHTML = "Esta app esta diseñada para codificar el nombre de cualquier archivo"


function menu()
{
  document.getElementById('menu').style.display = 'block';
  document.getElementById('intro').style.display = 'none';
}
