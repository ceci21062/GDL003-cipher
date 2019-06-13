window.cipher = {
  encode: (desplazar,txt)  => {
    let codi = '';
    for(let i=0; i<=txt.length;i++){
      let conLet = txt.charCodeAt(i);
      let eje = parseInt(conLet);
      let desNum= parseInt(desplazar);

      if(conLet >= 65 & conLet <=90){
        let letMyPri = eje - 65;
        let letMyDes = letMyPri + desNum;
        let letMyRes = letMyDes % 26;
        let letMyTot = letMyRes + 65;
        let txtMyCo = String.fromCharCode(letMyTot);
        codi += txtMyCo;
      }

     if(conLet >= 48 & conLet <=57){
        let numPri= eje - 48;
        let numDes= numPri + desNum;
        let numRes= numDes % 10;
        let numTot= numRes +48;
        let numCo= String.fromCharCode(numTot);
        codi+= numCo;
      }

      if(conLet>= 97 & conLet <= 122){
        let letMnPri= eje - 97;
        let letMnDes= letMnPri + desNum;
        let letMnRes= letMnDes % 26;
        let letMnTot= letMnRes + 97;
        let letMnCo= String.fromCharCode(letMnTot);
        codi+= letMnCo;
      }

      if(conLet ==32){
      let espam= conLet;
      let espacio= String.fromCharCode(espam);
      codi+= espacio;
      }
    }
    return codi;
  },

  decode: (numSecret,codiAres) =>{
    let res='';
    for (let i = 0; i <=codiAres.length; i++){
      let codiAss = codiAres.charCodeAt(i);
      let eje2= parseInt(codiAss);
      let conNumSec=parseInt(numSecret);

      if(codiAss >= 65 & codiAss <=90){
        let resLetMyPri = eje2 + 65;
        let resLetMy2 = resLetMyPri - conNumSec;
        let resLetMy3 = resLetMy2 % 26;
        let resLetMy4 = resLetMy3 + 65;
        let clavMyCo = String.fromCharCode(resLetMy4);
        res += clavMyCo;
      }

      else if(codiAss >= 48 & codiAss <=57){
        let resNumPri= eje2 + 48;
        let resNum3= resNumPri % 9;
        let resNum4= resNum3 + 48;
        let resNumCo= String.fromCharCode(resNum4);
        res += resNumCo;
      }

      else if(codiAss>= 97 & codiAss <= 122){
        let resLetMnPri = eje2 - 97;
        let resLetMn2 = resLetMnPri - conNumSec;
        let resLetMn3 = resLetMn2 % 26;
        let resLetMn4 = resLetMn3 + 97;
        let clavMnCo = String.fromCharCode(resLetMn4);
        res += clavMnCo;
      }

    }
    return res;
  }
  // ...
};
