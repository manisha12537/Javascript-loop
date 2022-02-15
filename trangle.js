var readlinesync=require("readline-sync")
var num1=readlinesync.questionInt("enter the number")
var num2=readlinesync.questionInt("enter the number")
var num3=readlinesync.questionInt("enter the number")
if(num1==num2 && num1==num3){
    console.log("Equilateral triangle")
}else if(num1==num2 || num3==num1 ||num3==num2){
    console.log("Isosceles triangle")
}else{
    console.log("Scalene triangle")
}





