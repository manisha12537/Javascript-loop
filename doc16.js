var readlinesync=require("readline-sync");
let number=readlinesync.questionInt("enter the number")
var i=1
var factorial=1
while(i<=number){
    factorial=factorial*i
    i++
}console.log("factorial",factorial)


