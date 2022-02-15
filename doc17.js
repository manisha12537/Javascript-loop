var readlinesync=require("readline-sync")
var number=readlinesync.questionInt("enter the number")
var temp = number
var add_sum = 0
var a=String(number)
var b=a.length
while (temp!=0){
    k = temp%10
    add_sum +=k**b
    temp = temp/10
    temp=Math.floor(temp)
}
if (add_sum==number){
    console.log('Armstrong Number')}
else{
    console.log('Not a Armstrong Number')}



