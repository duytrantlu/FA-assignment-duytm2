//bài 1: DNA Pairing
let pairElement=(str)=>{
    let DNA={A:'T',T:'A',G:'C',C:'G'};

    let newStr= str.split("");

    for(let i=0; i<newStr.length; i++) {
        newStr[i]=[newStr[i],DNA[newStr[i]]];
    }
    return newStr;

}
//console.log(pairElement("ATCGA"));
//bài 2: Missing letters 

function fearNotLetter(str) {
    let newStr=str.split("");
    let charCode=[];
    let missLater=0;
    for(let i=0; i<newStr.length; i++) {
        charCode.push(str.charCodeAt(i));
    }
    charCode.sort((a,b)=>a-b);
    for(let j=0; j<charCode.length; j++) {
        if((charCode[j]+1)<charCode[j+1]){
            missLater=charCode[j]+1;
        }
    }
    if(!missLater){
        return undefined;
    }else{
        return String.fromCharCode(missLater);
    }
  }
fearNotLetter("abce");

  
console.log(fearNotLetter("abce"));

