let num=9;
let count=0;
let flag=false;

for(let i=2; i*i<=num; i++){
    if(num<=1){
        console.log("notPrime");
        return;
    }
    if(num%i==0){
        console.log("notPrime");
        return;
    }
    console.log("prime");
}

