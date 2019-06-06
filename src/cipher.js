window.cipher = {
  encode: function(){
    let txt = document.getElementById("codigo").value;
    let desplazar= document.getElementById("numeroBase").value;
    let codi = '';

    for(i=0; i<=txt.length;i++){
      let suma1=txt.charCodeAt(i)-65;
      let suma2= suma1 + desplazar;
      let suma3= suma2 % 26;
      let suma4= suma3 + 65;
      let txtCo=String.fromCharCode(suma4);
      codi += txtCo;
    }
    return codi;
  },
  dencode: function(){
    let codiAres=document.getElementById("clave").value;
    let numSecret=document.getElementById("numeroSecreto").value;
    let res= "";

    for (var i = 0; i <=codiAres.length; i++){
      let rest1 = codiAres.charCodeAt(i)+ 65;
      let rest2 = rest1 - numSecret;
      let rest3 = rest2 % 26;
      let rest4 = rest3 + 65;
      let clavCo = String.fromCharCode(rest4);
      res += clavCo;
      }
    return res;
  }
  // ...
}
