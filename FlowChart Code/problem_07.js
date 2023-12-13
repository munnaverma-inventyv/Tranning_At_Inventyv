// Maximum of 2 no.

let x = parseInt(prompt('Enter the value of X'));
let y = parseInt(prompt('Enter the value of Y'));
let z = parseInt(prompt('Enter the value of Z'));
let w = parseInt(prompt('Enter the value of W'));

if(x>=y){
    if(x>=z){
        if(x>=w){
            console.log(x+" is Max")
        }else{
            console.log(w+" is Max")

        }
    }else if(z>=w){
        console.log(z+" is Max")
    }else{
        console.log(w+" is Max")
    }
}else if(y>=z){
    if(y>=w){
        console.log(y+" is Max")
    }else{
        console.log(w+" is Max")
    }
}else if(z>=w){
    console.log(z+" is Max")
}else{
    console.log(w+" is Max")
}