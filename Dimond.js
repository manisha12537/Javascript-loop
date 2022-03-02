var str=""
var z=5
for(var a=0;a<=z;a++){
    for(var  b=0;b<z-a;b++){
        str+=" "
    }for(var c=0;c<2*a-1;c++){
        str+="*"
    }str+="\n"
if(a==z){
    for(var i=0;i<z;i++){
        for(var j=0;j<i;j++){
            str+=" "
        }for(var k=0;k<2*(z-i)-1;k++){
            str+="*"
        }str+="\n"
    }
}
}console.log(str)