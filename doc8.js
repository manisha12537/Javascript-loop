var readlinesync=require("readline-sync");
var num=readlinesync.questionInt("enter the number");
var i=1;
while (i<=10){
    const squire=i*num;
    console.log(squire);
    i++

}



// var readlinesync=require("readline-sync");
// var num=readlinesync.questionInt("enter the number");
// var i=1;
// let squire=1
// do{
//     squire=i*num
//     console.log(squire)
//     i++

// }while(i<=10)



// var readlinesync=require("readline-sync");
// var num=readlinesync.questionInt("enter the number");
// let squire=1
// for(var i=1;i<=10;i++){
//     squire=i*num
//     console.log(squire)
// }