let num=9;
let count=0;
let flag=false;

for(let i=1; i<=num; i++){
    if(num%i==0){
        count++;
    }
    if(count>2){
        flag=true;
        break;
    }
}

if(count){
    console.log("Not a Prime");
}
else{
    console.log("Prime");
}