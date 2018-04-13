//bài 1: Wherefore art thou
function whatIsInAName(collection, source) {
    // What's in a name?
    //var arr = [];
    let lSource= Object.keys(source);
    let arr=collection.filter(obj=>{
        for(let i=0; i< lSource.length; i++){
            if(!obj.hasOwnProperty(lSource[i])||obj[lSource[i]!==source[lSource[i]]])
            return false;
        }
        return true;
    })
    return arr;
  }
//bài 2: chuyển số roman.
//console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
function convertToRoman(num) {
    if (!+num)
          return NaN;
      var digits = String(+num).split(""),
          key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                 "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                 "","I","II","III","IV","V","VI","VII","VIII","IX"],
          roman = "",
          i = 3;
  
      while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("")+1).join("M") + roman;
  }
//console.log(convertToRoman(8024));
 