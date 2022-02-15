// var readlinesync=require("readline-sync")
// var number=readlinesync.questionInt("enter the number")
// var a=Math.random(1,9)
// while(number!=a){
//     a=readlinesync.questionInt("enter the number")
// }console.log("good guessed")




// var readlinesync=require("readline-sync")
// var number=readlinesync.questionInt("enter the number")
// for(var a=Math.random(1,9);a!=number;){
//     a=readlinesync.questionInt("enter the number")
// }console.log("good guys")





var readlinesync=require("readline-sync")
var number=readlinesync.questionInt("enter the number")
var a=Math.random(1,9)
do{
    a=readlinesync.questionInt("enter the number")
}while(a!=number)
console.log("good guys")