// pattern
// 1121123211234321..... n=4

let n = parseInt(prompt("Enter the value of n"));
let a =1;
while(a<=n){
    let b = 1;
    while(b<=a){
        console.log(b);
        b++;
    }
    b=b-2;
    while(b>0){
        console.log(b);
        b--;
    }
    a++;
} 