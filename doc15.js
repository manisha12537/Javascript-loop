var readlinesync=require("readline-sync");
let number=readlinesync.questionInt("enter the number")
var a=0
var b=1
var count=0
while(count<number){
    console.log("Fibonacci series",a)
    d=a+b
    a=b
    b=d
    count+=1
}
