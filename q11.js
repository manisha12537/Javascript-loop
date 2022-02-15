// var i=1;
// while(i<=100){
//     if(i%3==0  && i%7==0){
//         console.log(i,"navgurukul")
//     }if(i%7==0){
//         console.log(i,"gurukul")
//     }if(i%3==0){
//         console.log(i,"nav")
//     }if(i%3!==0 && i%7!=0){
//         console.log(i)
//     }i++
// }


var readlinesync=require("readline-sync")
var number=readlinesync.questionInt("enter the number")
let s=String(number)
let j=s.length-1
let k=""
let i=0
while(i<s.length){
    k=k+s[j]+""
    j--
    i++
}console.log(k)


// var readlinesync=require("readline-sync")
// var number=readlinesync.questionInt("enter the number")
// var j=0
// var k=number%10
// console.log(k)
// if(k%3==0){
//     console.log("divisible by seven")
// }else{
//     console.log("not divisible by seven")
// }





// var readlinesync=require("readline-sync")
// var unit=readlinesync.questionInt("enter the number")
// var j=0
// if(unit<100){
//     j=0
// }if(unit>=100 && unit<=200){
//     j=(unit-100)*5
// }if(unit>200){
//     j=(unit-200)*10
// }console.log(j,"you have to pay per unit")


// First 100 units         no charge
// Next 100 units          Rs 5 per unit
// After 200 units         Rs 10 per unit




// var readlisync=require("readline-sync")
// var corrent_year=readlinesync.questionInt("enter the corrent year")
// var birth_year=readlinesync.questionInt("enter the birth year")
// let age=0
// if(corrent_year>birth_year){
//     age=corrent_year-birth_year
//     console.log(age)
// }else{
//     console.log("please enter correct ")
// }





// var readlisync=require("readline-sync")
// var percentage=readlinesync.questionInt("enter the percentage")
// var catagory=""
// if(percentage<40){
//     catagory="failed"
// }if(percentage>=40 && percentage<55){
//     catagory="fair"
// }if(percentage>=55 && percentage<65){
//     catagory="good"
// }if(percentage>=65){
//     catagory="excellent"
// }console.log(catagory)



// var readlinesync=require("readline-sync")
// var num1=readlinesync.questionInt("enter the number")
// var num2=readlinesync.questionInt("enter the number")
// var operator=readlinesync.questionInt("enter the operator")
// if(operator=="+"){
//     console.log(num1+num1)
// }else if(operator=="-"){
//     console.log(num1-num2)
// }else if(operator=="*"){
//     console.log(num1*num1)
// }else if(operator=="%"){
//     console.log(num1%num2)
// }else if(operator=="/"){
//     console.log(num1/num2)
// }else if(operator=="**"){
//     console.log(num1**num2)
// }else{
//     console.log("please enter the vaild operator")
// }




// var readlinesync=require("readline-sync")
// var num1=readlinesync.questionInt("enter the number")
// var num2=readlinesync.questionInt("enter the number")
// var num3=readlinesync.questionInt("enter the number")
// var second_large_num=0
// if(num1>num2 && num1>num3){
//     if(num2>num3){
//         second_large_num=num2
//     }else{
//         second_large_num=num3
//     }
// }if(num2>num1 && num2>num3){
//     if(num1>num3){
//         second_large_num=num1
//     }else{
//         second_large_num=num3
//     }}
// if(num3>num1 && num3>num2){
//     if(num1>num2){
//         second_large_num=num1
//     }else{
//         second_large_num=num2
//     }
// }console.log(second_large_num)




// var readlinesync=require("readline-sync")
// var char=readlinesync.question("enter the charactor")
// let a=char.length-1
// let b=char.length-2
// let c=char.length-3
// if(char.length>3 && char[c]=="i" && char[b]=="n" && char[a]=="g"){
//     console.log(char+"ly")
// }else{
//     console.log(char+"ing")
// }




// var readlinesync=require("readline-sync")
// var month=readlinesync.questionInt("enter the month")
// var year=readlinesync.questionInt("enter the year")
// let days_in_month=0
// if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     days_in_month=31
// }else if(month==4 || month==6 || month==9|| month==11){
//     days_in_month=30
// }else if(month==2){
//     if (year%4==0){
//         days_in_month=29
//     }else{
//         days_in_month=28
//     }
// }console.log(days_in_month)
// var day=readlinesync.questionInt("enter the day")
// if(days_in_month>day){
//     day=day+1
// }else{
//     day=1
//     if(month==12){
//         year=year+1
//         month=1
//     }else{
//         month=month+1
//     }
// }console.log(day,month,year)



// var readlinesync=require("readline-sync")
// var char=readlinesync.question("enter the charactor")
// if(char>"a" && char<"z"){
//     console.log("lower")
// }else if(char>"A" && char<"Z"){
//     console.log("upper")
// }





