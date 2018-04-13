//Bài 1: Sum All Numbers in a Range 
var sumAll= (arr)=>{
    let sum =0;
    let head= Math.min(...arr);
    let tail = Math.max(...arr);
    for(let i=head; i<=tail; i++){
        sum+=i;
    }
    return sum;
}
console.log(sumAll([10,5]));

//Bài 2: Diff Two Array
let diffA=(arr1,arr2)=>{
    return  arr1.filter(w=>{
        return !arr2.includes(w)
     }).concat(arr2.filter(w=>{
        return !arr1.includes(w)
     }));
 };

console.log(diffA([1, 2, 3, 7,8,9,0,4,5], [1, 2, 3, 4, 5]))
