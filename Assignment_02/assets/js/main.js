(() => {
  var arr1 = [1, 2, 3, 4, 5];
  var FirstElement = arr1.shift();
  func2(FirstElement, arr1);
})();

function func2(FirstElement, arr1) {
  var arr2 = [6, 7, 8, 9];
  arr2.unshift(FirstElement);
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  var sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    sum = sum + arr2[i];
  }
  let promise = new Promise((resolve, reject) => {
    if (sum > 30) {
      resolve(sum);
    } else {
      reject(error);
    }
  });
  promise.then((result) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())  
    .then((data)=>{
        for(let i=0;i<sum;i++){
            console.log(data[i].url);
        }
    })
  }).catch(()=>{
    console.log("sum is not greater than 30");
  })
}
