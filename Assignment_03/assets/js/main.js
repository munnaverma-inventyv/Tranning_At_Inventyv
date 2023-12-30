function main() {
    let n=parseInt(prompt("Enter value of n"));
    let r=parseInt(prompt("Enter value of r"));
    return combination(n,r);
}
function combination(n,r){
    return factorial(n)/(factorial(r)*factorial(n-r));
}
function factorial(no){
    if(no==1){
        return 1;
    }
    return no*factorial(no-1);
}

let ans = main();
console.log(ans);