// var readlinesync=require("readline-sync");
// let number=readlinesync.questionInt("enter the number")
// let a=String(number)
// var i=0
// let pailndrom=false
// var j=a.length-1
// while(i<a.length){
//     if(a[i]==a[j]){
//         pailndrom=true
//     }else{
//         pailndrom=false
//     }
 
//     i++
//     j--
// }
// console.log(pailndrom)



// var readlinesync=require("readline-sync");
// let number=readlinesync.questionInt("enter the number")
// let a=String(number)
// var i=0
// var b=a.length-1
// let pailndrom=false
// do{
//     if(a[i]==a[b]){
//         pailndrom=true

//     }else{
//         pailndrom=false
//     }i++
//     b--

// }while(i<a.length)
// console.log(pailndrom)



var readlinesync=require("readline-sync");
let number=readlinesync.questionInt("enter the number")
let a=String(number)
let b=a.length-1
let pailndrom=false
for(var i=0;i<a.length;i++){
    if(a[b]==a[i]){
        pailndrom=true
    }else{
        pailndrom=false
    }b--
}console.log(pailndrom)
