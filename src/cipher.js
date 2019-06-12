window.cipher = {
  encode: (desplazar,txt)  => {
    let codi = '';
    for(let i=0; i<=txt.length;i++){
      let conLet = txt.charCodeAt(i);
      let eje = parseInt(conLet);
      let desNum= parseInt(desplazar);

      if(conLet >= 65 & conLet <=90){
      let letPri = eje - 65;
      let letDes = letPri + desNum;
      let letRes = letDes % 26;
      let letTot = letRes + 65;
      let txtCo = String.fromCharCode(letTot);
      codi += txtCo;
      }
      else  if (conLet >= 48 & conLet <=57){
        let numPri= eje - 48;
        let numDes= numPri + desNum;
        let numRes= numDes % 10;
        let numTot= numRes +48;
        let numCo= String.fromCharCode(numTot);
        codi+= numCo;
      }
      else if (conLet>=) {

      }{

      }{

      }
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
