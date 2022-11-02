let str="abba";
let revString="";

for(let i=str.length-1;i>=0; i--){
      revString+=str[i];
}

if(str==revString){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}