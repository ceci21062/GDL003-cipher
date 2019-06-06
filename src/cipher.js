window.cipher = {
  encode: function (){
    let txt = document.getElementById("codigo").value;
    let desplazar= document.getElementById("numeroBase").value;
    let codi = '';

    for(i=0; i<=txt.length;i++){
      let suma1=txt.charCodeAt(i)-65;
      let suma2= suma1 + desplazar;
      let suma3= suma2 % 26;
      let suma4= suma3 + 65;
      let txtCo=String.fromCharCode(suma4)+" ";
      codi += txtCo
    }
    return codi;
  }
  
  // ...
};
