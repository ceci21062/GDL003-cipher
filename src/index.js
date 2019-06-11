
document.getElementById('intro').style.display = 'block';
document.getElementById('menu').style.display = 'none';
document.getElementById("codificar").style.display='none';
document.getElementById("decodificar").style.display="none";

//pag de inicio
document.getElementById("introduccion").innerHTML = "CLASIFICADO";
document.getElementById("objetivo").innerHTML = "Esta app esta diseñada para codificar el nombre de cualquier archivo";
//function menu() {
const menu=() => {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('intro').style.display = 'none';
  document.getElementById("codificar").style.display='none';
  document.getElementById("decodificar").style.display="none";

  document.getElementById("requisitos").innerHTML= "Para codificar es necesario tener en cuenta los sigueintes requisitos";
  document.getElementById("reqUno").innerHTML="El nombre debe estar en mayusculas";
  document.getElementById("reqDos").innerHTML="No incluir simbolos";
  document.getElementById("reqTre").innerHTML="No incluir la Ñ";
  document.getElementById("reqCua").innerHTML="sin espacios";

  document.getElementById("requisitos1").innerHTML= "Para codificar es necesario tener en cuenta los sigueintes requisitos";
  document.getElementById("reqCin").innerHTML="El nombre debe estar en mayusculas";
  document.getElementById("reqSei").innerHTML="No incluir simbolos";
  document.getElementById("reqSie").innerHTML="No incluir la Ñ";
  document.getElementById("reqOch").innerHTML="sin espacios";
  document.getElementById("reqNue").innerHTML="Tener a la mano el Numero Base";
};

document.getElementById('iniciar').addEventListener("click",menu);

const codificar =() => {
  document.getElementById("codificar").style.display='block';
  document.getElementById('menu').style.display ='none';
  document.getElementById('intro').style.display ='none';
  document.getElementById("decodificar").style.display="none";

  document.getElementById("enviarCodigo").addEventListener("click",function(){
    document.getElementById("texto").innerHTML = window.cipher.encode();
  });
};

document.getElementById('bottoncodificar').addEventListener("click", codificar);

const decodificar= () => {
  document.getElementById("decodificar").style.display='block';
  document.getElementById("codificar").style.display='none';
  document.getElementById('menu').style.display ='none';
  document.getElementById('intro').style.display ='none';

  document.getElementById("enviarClave").addEventListener("click",function(){
    document.getElementById("codiDesi").innerHTML = window.cipher.dencode();
  });
};

document.getElementById('bottondecodificar').addEventListener("click", decodificar);
