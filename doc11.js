// var readlinesync=require("readline-sync");
// var num1=readlinesync.questionInt("enter the number");
// var a=String(num1)
// let i=0
// let sum=0
// while (i<a.length){
//     sum=sum+parseInt(a[i])
//     i++
// }
// console.log(sum)


// var readlinesync=require("readline-sync");
// var num1=readlinesync.questionInt("enter the number");
// var a=String(num1)
// let sum=0
// for(var i=0;i<a.length;i++){
//     sum=sum+parseInt(a[i])
// }console.log(sum)




var readlinesync=require("readline-sync");
var num1=readlinesync.questionInt("enter the number");
var a=String(num1)
let sum=0
let i=0
do{
    sum=sum+parseInt(a[i])
    i++
}while(i<a.length)
console.log(sum)