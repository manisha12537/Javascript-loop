var readlinesync=require("readline-sync")
var num=readlinesync.questionInt("enter the number")
var i=1
while(i<num){
    if(num%i==0){
        console.log("factorce",i)
    }i++

}



// var readlinesync=require("readline-sync")
// var num=readlinesync.questionInt("enter the number")
// for(var i=0;i<num;i++){
//     if(num%i==0){
//         console.log("factorce",i)
//     }i++
// }




// var readlinesync=require("readline-sync")
// var num=readlinesync.questionInt("enter the number")
// var i=0
// do{
//     if(num%i==0){
//         console.log("factorce",i)
//     }i++
// }while(i<num)
