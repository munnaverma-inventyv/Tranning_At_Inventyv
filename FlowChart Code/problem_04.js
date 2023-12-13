// Rupees and Paise Problem
// If Amount is in Rupees then convert it into Paise and if Amount is in Paise then convert it into Rupees.

// Reading Amount
let c = prompt('Enter "p" if it is paise or "r" if it is rupees');
let A = prompt('Enter the Amount');

if(c=="r"){
    A=A*100
    console.log(A)
}else if(c=="p"){
    A=A/100
    console.log(A)
}else{
    console.error("Invalid Character");
}