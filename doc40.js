var readlinesync=require("readline-sync")
var number=readlinesync.questionInt("enter the number")
var number1=readlinesync.questionInt("enter the number")
var i=0
var sum=0
while(number!=0){
    k=number%10
    sum=sum+k
    number=number/10
    number=Math.floor(number)
    console.log(number)
}var j=0
var sum1=0
while(number1!=0){
    j=number1%10
    sum1=sum1+j
    number1=number1/10
    number1=Math.floor(number1)
}
if(sum>=15 && sum<=20){
    console.log(sum)
}if(sum1>=15 && sum1<=20){
    console.log(sum1)
}else{
    console.log("no one is bitween 15 to 20")
}
                