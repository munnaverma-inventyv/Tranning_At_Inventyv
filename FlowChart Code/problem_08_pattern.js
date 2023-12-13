// pattern
// 1121231234... n=4

let n = parseInt(prompt('Enter the value of n'));
let a = 1;
let b = 1;

while(a<=n){
    while(b<=a){
        console.log(b);
        b++;
    }
    a++;
    b=1;
    
}
