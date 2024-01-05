# Question
- Develope a program that reads a Number Input that should be atlest 4 degit long then apply Permutaion and Combination on that then among them found a prime numbers. after that draw a pascal tree and underline the prime number on that.
## Code
- Permutation
```
function permute(arr, current = []) {
    if (current.length > 0) {
      permutations.add(parseInt(current.join('')));
    }

    if (arr.length === 0) {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const remainingDigits = [...arr.slice(0, i), ...arr.slice(i + 1)];
      permute(remainingDigits, [...current, arr[i]]);
    }
  }
```
- Pascal tree
```
while (true) {
    triangle[row] = [];
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        triangle[row][col] = 1;
      } else {
        triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
      }

      if (triangle[row][col] > maxNumber) {
        console.log(triangle);
        return triangle; // Stop generating when maxNumber is exceeded
      }
    }

    row++;
  }
```
- For more Detail you can go to Assignment_05/Main/assets/Js/index.js

