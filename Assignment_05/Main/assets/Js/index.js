
// Permutation Part ----------------------------------------------------------------------------------
function getUniquePermutations(number) {
  const digits = String(number).split('');
  const permutations = new Set();

  for (let length = 1; length <= digits.length; length++) {
    permute(digits.slice(0, length));        // slice will return a new subarray from array
  }
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
  return Array.from(permutations);
}

// Example usage with the number 1245

const number = parseInt(prompt("Enter any no that should be contain atleast 4 digit"));

const result = number>999 ? getUniquePermutations(number) : alert("Number should be atleast 4 digit")

let pnc = document.getElementById('PandC');
pnc.innerText = `Permutaion and Combination of Number : ${result}`;
// Finding Prime No ---------------------------------------------------------------------------------------
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimeNumbers(arr) {
  return arr.filter(number => isPrime(number));
}

const primeNumbers = findPrimeNumbers(result);
console.log(primeNumbers);
const maxPrimeNo = Math.max(...primeNumbers);
console.log(maxPrimeNo);

let primeNo = document.getElementById('primeNo');
primeNo.innerText = `Prime No from the P&C : ${primeNumbers}`;
// pascal tree ----------------------------------------------------------------------------------------------

function generatePascalsTriangle(maxNumber) {
  const triangle = [];
  let row = 0;

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
}
// this count is for finding the error ratio 
let count =0;
let primeNumbersNotInTriangle;
// Function to render Pascal's Triangle in the HTML document
function renderPascalsTriangle(maxNumber,primeNumbersarr) {
  const pascalTree = document.getElementById('pascalTree');
  if (!pascalTree) {
    console.error('Element with ID "pascalTree" not found.');
    return;
  }

  const primeNumbersDiv = document.getElementById('primeNumbers');
  if (!primeNumbersDiv) {
    console.error('Element with ID "primeNumbers" not found.');
    return;
  }

  const triangle = generatePascalsTriangle(maxNumber);
  const maxRowIndex = triangle.length;

  for (let i = 0; i < maxRowIndex; i++) {
    if (triangle[i].some(value => value > maxNumber)) {
      break; // Stop rendering when the maximum number is exceeded in the row
    }
    
    const rowDiv = document.createElement('div');
    rowDiv.className = 'triangle-row';

    for (let j = 0; j < triangle[i].length; j++) {
      const cellDiv = document.createElement('div');
      cellDiv.className = 'triangle-cell';
      if (isPrime(triangle[i][j]) && primeNumbersarr.includes(triangle[i][j])) {
        cellDiv.classList.add('prime');
        count++;
      }
      cellDiv.textContent = triangle[i][j];
      rowDiv.appendChild(cellDiv);
    }

    pascalTree.appendChild(rowDiv);
  }

  primeNumbersNotInTriangle = primeNumbersarr.filter(num => !triangle.flat().includes(num) && isPrime(num));

  // Display prime numbers not in Pascal's Triangle in a separate div
  primeNumbersDiv.textContent = 'Prime Numbers Not in Pascal\'s Triangle: ' + primeNumbersNotInTriangle.join(', ');
}

renderPascalsTriangle(maxPrimeNo,primeNumbers)

let ErrorRatio = document.getElementById('ErrorRatio');
let ratio =  primeNumbersNotInTriangle.length*100/primeNumbers.length;
ErrorRatio.innerText = `Permutaion and Combination of Number : ${ratio} %`;