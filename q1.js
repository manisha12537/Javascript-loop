var readlinesync=require("readline-sync");
var number=readlinesync.question("enter the number");
var string=""
for(var a=number.length-1;a>=0;a--){
    string=string+number[a]
    if (string==number){
        pailndrom=true
    }else{
        pailndrom=false
    }
}console.log(pailndrom)






// var a="mom";
// var i=0
// let paildrom=false
// var k=a.length-1
// do{
//     if(a[i]==a[k]){
//         paildrom=true
//     }else{
//         paildrom=false
//     }i++
//     k--
// }while(i<a.length)
// console.log(paildrom)



// a="mom"
// k=a.length-1
// pailndrom=false
// for(var i=0;i<a.length;i++){
//     if(a[i]==a[k]){
//         pailndrom=true
//     }else{
//         pailndrom=false
//     }
//     k--
// }console.log(pailndrom) 