// var readlinesync=require("readline-sync")
// var num=readlinesync.questionInt("enter the number")
// var i=0
// var sum=0 
// let sum1=0
// while(i<num){
// sum=i*i
// sum1=sum1+sum
// console.log(sum)
// i++
// }
// console.log(sum1)



// var readlinesync=require("readline-sync")
// var num=readlinesync.questionInt("enter the number")
// var sum=0
// var sum1=0
// for(var i=0;i<num;i++){
//     sum=i*i
//     sum1=sum1+sum
// console.log(sum)}
// console.log(sum1)



var readlinesync=require("readline-sync")
var num=readlinesync.questionInt("enter the number")
var sum=0
var sum1=0
var i=0
do{
    sum=i*i
    sum1=sum+sum
    console.log(sum)
    i++
}while(i<=num)
console.log(sum1)

