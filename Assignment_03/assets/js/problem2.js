// Q -> Stroring and display all the element of array using recurion
let myArray = [1, 2, 3, 4, 5];

function storingElements(arr, i, resultArray) {
    if (i < 0 || i >= arr.length) {
        return resultArray;
    }
    resultArray.push(arr[i]);
    return storingElements(arr, i + 1, resultArray);
}

function displayArrayElements(arr, i) {
    if (i < 0 || i >= arr.length) {
        return;
    }
    console.log(arr[i]);
    // Recursive call to display the next element
    displayArrayElements(arr, i + 1);
}
let storedArray = [];
let result = storingElements(myArray, 0, storedArray);
displayArrayElements(result, 0);