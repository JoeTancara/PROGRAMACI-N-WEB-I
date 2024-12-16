document.getElementById('generateMatrix').addEventListener('click', createPrimeSpiralMatrix);

// Función para verificar si un número es primo
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Función para generar una lista de números primos
function generatePrimes(count) {
  const primes = [];
  let num = 2;
  while (primes.length < count) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
}

// Función para crear la matriz en forma de gusanito con números primos
function createPrimeSpiralMatrix() {
  const rows = parseInt(document.getElementById('rows').value);
  const cols = parseInt(document.getElementById('cols').value);

  if (rows <= 0 || cols <= 0) {
    alert('Las filas y columnas deben ser mayores que 0.');
    return;
  }

  const totalCells = rows * cols;
  const primes = generatePrimes(totalCells);

  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  let top = 0, bottom = rows - 1, left = 0, right = cols - 1;
  let index = 0;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = primes[index++];
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = primes[index++];
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = primes[index++];
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = primes[index++];
      }
      left++;
    }
  }

  displayMatrix(matrix);
}

// Función para mostrar la matriz en formato tabla
function displayMatrix(matrix) {
  const container = document.getElementById('matrixContainer');
  container.innerHTML = ''; // Limpiar el contenedor

  const table = document.createElement('table');

  matrix.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  container.appendChild(table);
}
