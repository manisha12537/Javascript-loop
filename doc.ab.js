var s=""
var k=5
for(var i=1;i<=k;i++){
    for(var j=1;j<=k-i;j++){
        s=s+" "
    }for(var l=1;l<=2*i-1;l++){
        s=s+i
    }s+="\n"
}console.log(s)



//          1
//         222
//        33333
//       4444444
//      555555555