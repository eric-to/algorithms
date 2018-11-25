// Doubles each element in an array
function doubler(array) {
  return array.map(el => el * 2);
}

// Returns the first "num" factorial numbers.
function factorialsRec(num) {
  if (num === 1) return [1];
  const facs = factorialsRec(num - 1);
  facs.push(facs[facs.length - 1] * (num - 1));
  return facs;
}

// Returns the factors of a number in ascending order.
function factors(num) {
  const factors = [];
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);
      factors.push(num / i);
    }
  }
  return factors.sort((x, y) => (x - y));
}

// Returns the sum of the first n even numbers
function firstEvenNumbersSum(n) {
  if (n === 1) return 2;
  return 2 * n + firstEvenNumbersSum(n - 1)
}

// Similar to call
Function.prototype.myCall = function (ctx, ...args) {
  return this.bind(ctx, ...args)();
};

// Similar to forEach
Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
  return this;
}

// Similar to Ruby's all?
Array.prototype.myEvery = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i])) return false;
  }
  return true;
}

// Similar to Ruby's select
Array.prototype.myFilter = function (func) {
  const selected = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) selected.push(this[i]);
  }
  return selected;
}

// Similar to Ruby's any?
Array.prototype.mySome = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) return true;
  }
  return false;
}

// Returns an array of all the unique subwords of the string that appear in the
// dictionary argument.
String.prototype.realWordsInString = function (dictionary) {
  const realWords = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      let word = this.slice(i, j);
      if (realWords.indexOf(word) < 0 && dictionary.indexOf(word) > -1) {
        realWords.push(word);
      }
    }
  }
  return realWords;
}

// Similar to Ruby's reject
Array.prototype.reject = function (func) {
  const selected = [];
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i])) selected.push(this[i]);
  }
  return selected;
}

// Returns the sum of all elements in an array
function recSum(nums) {
  if (!nums.length) return 0;
  return nums[0] + recSum(nums.splice(1));
}

// Matrix transpose
function transpose(arr) {
  const transposed = [];
  for (let i = 0; i < arr[0].length; i++) {
    transposed.push([]);
    for (let j = 0; j < arr.length; j++) {
      transposed[i][j] = arr[j][i];
    }
  }
  return transposed;
};