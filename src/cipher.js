window.cipher = {
  encode: (desplazar,txt)  => {
    let codi = '';
    for(let i=0; i<=txt.length;i++){
      let conLet = txt.charCodeAt(i);
      let eje = parseInt(conLet);
      let sumaPri = eje - 65;
      let desNum= parseInt(desplazar);
      let sumaDes = sumaPri + desNum;
      let sumaRes = sumaDes % 26;
      let sumaTot = sumaRes + 65;
      let txtCo = String.fromCharCode(sumaTot);
      console.log(String.fromCharCode(sumaTot));
      codi += txtCo;

    }
    return codi;
  },

  decode: (numSecret,codiAres) =>{
    let res= "";
    for (let i = 0; i <=codiAres.length; i++){
      let codiAss = codiAres.charCodeAt(i);
      let eje2= parseInt(codiAss);
      let restPri = eje2 + 65;
      let conNumSec=parseInt(numSecret);
      let rest2 = restPri - conNumSec;
      let rest3 = rest2 % 26;
      let rest4 = rest3 + 65;
      let clavCo = String.fromCharCode(rest4);
      res += clavCo;
      }
    return res;
  }
  // ...
};
