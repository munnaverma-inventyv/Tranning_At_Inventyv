// Maximum of 3 no.

let x = parseInt(prompt('Enter the value of X'));
let y = parseInt(prompt('Enter the value of Y'));
let z = parseInt(prompt('Enter the value of Z'));
if(x>=y){
    if(x>=z){
        console.log(x+" is Max");
    }else{
        console.log(z+" is Max");
    }
}else{
    if(y>=z){
        console.log(y+" is Max");
    }else{
        console.log(z+" is Max")
    }
}