
function fibonacciSeries(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        return fibonacciSeries(n-1)+fibonacciSeries(n-2);
    }
}
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function main(){
    let fiboSeries =[];
    fiboSeries.push(0);
    fiboSeries.push(1);
    let n =30;
    for(let i=2;i<n;i++){
        fiboSeries.push(fibonacciSeries(i));
    }
    let filterdPrimeNo = fiboSeries.filter((item) => isPrime(item) && item > 1);
    console.log(filterdPrimeNo);
    let sum=0;
    for(let i=0;i<filterdPrimeNo.length;i++){
        if(i<=filterdPrimeNo.length-2)
        {
            sum=sum+(filterdPrimeNo[i]-filterdPrimeNo[i+1]);
            // console.log(sum);
        }
    }
    console.log(sum);
}
main()

