const num=[1,56,89,70,48,678,997]
let even=0
for(i=1;i<num.length;i++){
    if(num[i]%2==0){
        even=even+1;
    }
}
console.log("The even numbers in an array:",even)
