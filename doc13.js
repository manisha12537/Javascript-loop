var readlinesync=require("readline-sync");
let number=readlinesync.questionInt("enter the number");
var a=String(number)
var i=0
let sum=""
var k=a[a.length-1]
while(i<a.length){
    sum=sum+k+""
    i++
    k--
}console.log(sum)