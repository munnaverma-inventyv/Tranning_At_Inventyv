// Pattern
// 1! 3! 5!   7! ...... n=4
// 1  6  120 362880 ... 

let n = parseInt(prompt('Enter the value of n'));
let no = 1
let a = 1;
while(no<=n){
    b=a
    let c=1;
    while(b>0){
        c=c*b
        b--;
    }
    if(no%2==0){
        c=c*-1;
    }
    console.log(c);
    a=a+2;
    no++
}