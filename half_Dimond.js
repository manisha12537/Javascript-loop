var str=""
var a=5
for(var i=0;i<=a;i++){
    for(var j=0;j<i;j++){
        str+="*"
    }str+="\n"
if(i==a){
    for(var k=0;k<a;k++){
        for(var x=0;x<a-k-1;x++){
            str+="*"
        }str+="\n"
    }
}
}console.log(str)