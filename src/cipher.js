window.cipher = {
  encode: function(){
    let txt = document.getElementById("codigo").value;
    let desplazar= document.getElementById("numeroBase").value;
    let codi = '';

    for(i=0; i<=txt.length;i++){
      let conLet = txt.charCodeAt(i);
      let eje = parseInt(conLet)
      console.log(eje)
      let sumaPri = eje - 65;
      console.log(sumaPri)
      let desNum= parseInt(desplazar)
      let sumaDes = sumaPri + desNum;
      console.log(sumaDes)
      let sumaRes = sumaDes % 26;
      console.log(sumaRes)
      let sumaTot = sumaRes + 65;
      console.log(sumaTot)
      let txtCo = String.fromCharCode(sumaTot);
      console.log(String.fromCharCode(sumaTot))
      codi += txtCo;

    }
    return codi;
  },

  dencode: function(){
    let codiAres=document.getElementById("clave").value;
    let numSecret=document.getElementById("numeroSecreto").value;
    let res= "";

    for (var i = 0; i <=codiAres.length; i++){
      let codiAss = codiAres.charCodeAt(i)
      let eje2= parseInt(codiAss)
      let restPri = eje2 + 65;
      let conNumSec=parseInt(numSecret)
      let rest2 = restPri - conNumSec;
      let rest3 = rest2 % 26;
      let rest4 = rest3 + 65;
      let clavCo = String.fromCharCode(rest4);
      res += clavCo;
      }
    return res;
  }
  // ...
}
