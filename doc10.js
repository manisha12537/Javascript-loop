// var readlinesync=require("readline-sync");
// var num1=readlinesync.questionInt("enter the number");
// var prime_number;
// if (num1>1){
//     var i=2;
//     while (i<num1){
//         if (num1%i==0){
//             prime_number=true
//             break

//         }else{
//             prime_number=false
//         }i++
//     }if(prime_number){
//         console.log(num1,"not prime number")
//     }else{
//         console.log(num1,"prime number")
//     }
// }




var readlinesync=require("readline-sync");
var num1=readlinesync.questionInt("enter the number");
var prime_number;
if(num1>1){
    for(var i=2;i<num1;i++){
        if(num1%i==0){
            prime_number=true
            break
        }else{
            prime_number=false
        }
    }if(prime_number){
        console.log("not prime number")
    }else{
        console.log("prime number")
    }
}