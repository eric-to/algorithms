// Notorious bubble sort
Array.prototype.bubbleSort = function (func) {
  let copy = this.slice();

  if (!func) {
    func = (x, y) => {
      if (x <= y) return -1;
      return 1;
    };
  }

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < copy.length; i++) {
      if (i === copy.length - 1) {
        break;
      }
      if (func(copy[i], copy[i + 1]) === 1) {
        let temp = copy[i + 1];
        copy[i + 1] = copy[i];
        copy[i] = temp;
        sorted = false;
      }
    }
  }

  return copy;
}

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

// Returns the median of elements in an array
Array.prototype.median = function () {
  if (!this.length) return null;
  const sorted = this.sort((x, y) => (x - y));
  const mid = Math.floor(this.length / 2);

  if (this.length % 2 != 0) {
    return this[mid];
  } else {
    return ((this[mid] + this[mid - 1]) / 2);
  }
}

// Mergesort
Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) return this;

  if (!func) {
    func = (x, y) => {
      if (x <= y) return -1;
      return 1;
    }
  }

  const mid = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, mid).mergeSort(func);
  const sortedRight = this.slice(mid).mergeSort(func);

  return sortedLeft.merge(sortedRight, func);
}

Array.prototype.merge = function (arr, func) {
  let merged = [];

  while (this.length && arr.length) {
    if (func(this[0], arr[0]) === 1) {
      merged.push(arr.shift());
    } else {
      merged.push(this.shift());
    }
  }

  return merged.concat(this, arr);
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

// Similar to reduce and Ruby's inject
Array.prototype.myReduce = function (func, acc) {
  const copy = this.slice();
  if (!acc) {
    acc = copy.shift();
  }

  for (let i = 0; i < copy.length; i++) {
    acc = func(acc, copy[i]);
  }

  return acc;
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

// Capitalizes each word in a string like a book title
function titleize(title) {
  const ignore = ['and', 'the', 'over'];
  const words = title.split(' ');
  const titlelizedWords = [];

  for (let i = 0; i < words.length; i++) {
    if (ignore.includes(words[i])) {
      if (i === 0) {
        titlelizedWords.push(words[i][0].toUpperCase() + words[i].slice(1));
      } else {
        titlelizedWords.push(words[i]);
      }
    } else {
      titlelizedWords.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
  }

  return titlelizedWords.join(" ");
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

// Finds all pairs of positions where the elements at those positions sum to zero.
// Examples:
// [0, 2] comes before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)
Array.prototype.twoSum = function () {
  const pairs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}