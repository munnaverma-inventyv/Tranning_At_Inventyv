// Pattern
// 1! 3! 5!   7! ...... n=4
// 1  6  120 362880 ... 

let n = parseInt(prompt('Enter the value of n'));
let a = 1;
while(n>0){
    b=a
    let c=1;
    while(b>0){
        c=c*b
        b--;
    }
    console.log(c);
    a=a+2;
    n--
}