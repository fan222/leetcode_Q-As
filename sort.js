// Sorting is arranging the elements in a list or collection in
// increasing or decreasing order of some property.
// Time complexity
// Space complexity
// Stability
// internal or external
// recursive or non-recursive

// Selection sort
// left - unsorted, right - sorted
// O(n**2) time, O(1) space
var selectionSort = function(arr, n) {
  var iMin;
  for (var i = 0; i < n - 1; i++) {
    iMin = i;
    for (var j = i; j < n; j++) {
      if (arr[j] < arr[iMin]) {
        iMin = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[iMin];
    arr[iMin] = temp;
  }
};


// Bubble sort
// best case: O(n), worst and average O(n**2)
// stable and in-place
var bubbleSort = function(arr) {
  for (var i = 1; i < arr.length; i++) {
    var flag = 0;
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = 1;
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    if (flag === 0) {
      break;
    }
  }
};

// Insertion sort
// best o(n), worst and average O(n**2)
var insertionSort = function(arr, n) {
  for (var i = 1; i < n; i++) {
    var val = arr[i];
    var hole = i;
    while (hole> 0 && arr[hole - 1] > val) {
      arr[hole] = arr[hole - 1];
      hole = hole - 1;
    }
    arr[hole] = val;
  }
};

// Merge sort
// time complexity, worst O(n log n)
// space complexity, O(n) (if we clear extra memory in each call);
// if we do not clear extra memory for left and right, O(n log n)

// reduce problem into sub-problems in self-similar manner
// divide and conquer
// recursive
// stable
// not in-place
var mergSort = function(arr) {
  var n = arr.length;
  if (n < 2) {
    return arr;
  }
  var mid = parseInt(n / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  var leftSorted = mergSort(left);
  var rightSorted = mergSort(right);
  var res = [];
  while (leftSorted.length > 0 && rightSorted.length > 0) {
    if (leftSorted[0] <= rightSorted[0]) {
      res.push(leftSorted.shift());
    } else {
      res.push(rightSorted.shift());
    }
  }
  return res.concat(leftSorted, rightSorted);
};


// Quick sort
// time complexity: best and average O(n log n); worst O(n**2), avoid be using random pivot
// in-place, average O(log n), worst O(n)
// divide and conquer
// recursive
// not stable
var quickSort = function(arr, start, end) {
  if (start >= end) {
    return arr;
  }
  var pIndex = partition(arr, start, end);
  quickSort(arr, start, pIndex - 1);
  quickSort(arr, pIndex + 1, end);
  return arr;
};
var partition = function(arr, start, end) {
  // var pivotIndex = random(start, end)
  // swap(arr[pivotIndex], arr[end])
  var pivot = arr[end];
  var pIndex = start;
  for (var i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      var temp = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = temp;
      pIndex += 1;
    }
  }
  temp = arr[pIndex];
  arr[pIndex] = arr[end];
  arr[end] = temp;
  return pIndex;
};
