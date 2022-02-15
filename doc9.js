var readlinesync=require("readline-sync");
var num1=readlinesync.questionInt("enter the number");
var num2=readlinesync.questionInt("enter the number");
while (num1<=num2){
    if(num1%2==0){
        console.log(num1);
    }num1++
}



// var readlinesync=require("readline-sync");
// var num1=readlinesync.questionInt("enter the number");
// var num2=readlinesync.questionInt("enter the number");
// do{
//     if(num1%2==0){
//         console.log(num1)
//     }num1++
// }while(num1<=num2)



// var readlinesync=require("readline-sync");
// var num2=readlinesync.questionInt("enter the number");
// for(num1=1;num1<=num2;num1++){
//     if(num1%2==0){
//         console.log(num1);
//     }
// }