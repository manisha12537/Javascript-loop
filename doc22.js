var i=1
let avg=0
let sum=0
while(i<=10){
    var readlinesync=require("readline-sync")
    var number=readlinesync.questionInt("enter the number")
    sum=sum+number
    avg=sum/i
    i++
}
console.log(sum)
console.log(avg)