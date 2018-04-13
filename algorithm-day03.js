//bài 1: Search and ReplaceIncomplete  
function myReplace(str, before, after) {
    var index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    str = str.replace(before, after);
  
    return str;
  }
  
  
 //console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

 //bài 2: Pig LatinIncomplete
 
function translatePigLatin(str) {
    let newArr=[];
    let temp;
    let regex=/[aeiou]/g;
    let isConso=(character)=>{
        return !regex.test(character);
    }
    
    if(!isConso(str[0])){
        return str + "way";
    }else{
        newArr = str.split("");
    }
    while(isConso(newArr[0])){
        temp=newArr.shift();
        newArr.push(temp);
    }
    return newArr.join("")+"ay";
  }
//console.log(translatePigLatin("consonant"));