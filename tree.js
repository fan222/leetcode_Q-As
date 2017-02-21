// binary search
var bSearch = function(arr, target) {
  if (arr.length === 0) {
    return null;
  }
  var probIndex = parseInt(arr.length / 2);
  if (arr[probIndex] === target) {
    return probIndex;
  } else if (arr[probIndex] > target) {
    return bSearch(arr.slice(0, probIndex), target);
  } else {
    var rightRes = bSearch(arr.slice(probIndex + 1), target);
    if (rightRes !== null) {
      return probIndex + 1 + rightRes;
    } else {
      return null;
    }
  }
};

// find min and max of BST
var findMinIt = function(root) {
  if (root === null) {
    return null;
  }
  while (root.left !== null) {
    root = root.left;
  }
  return root.val;
};

var findMinRe = function(root) {
  if (root === null) {
    return null;
  } else if (root.left === null) {
    return root.val;
  }
  return findMinRe(root.left);
};

// find height of a binary tree
// number of edges in longest path from root to leaf node


// check if a given binary tree is BST.
// time complexity O(n)
var isBinarySearchTree = function(root) {
  var max;
  var min;
  return isBstUtil(root, max, min);
};

var isBstUtil = function(root, max, min) {
  if (root === null) {
    return true;
  }
  if (root.val > min && root.val < max &&
      isBstUtil(root.left, root.val, min) &&
      isBstUtil(root.right, max, root.val)) {
    return true;
  } else {
    return false;
  }
};

// in-order traversal result in sorted list


// delete node
var deleteNode = function(root, val) {
  if (root === null) {
    return root;
  } else if (val < root.val) {
    root.left = deleteNode(root.left, val);
  } else if (val > root.val) {
    root.right = deleteNode(root.right, val);
  } else {
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.left === null) {
      root = root.right;
    } else if (root.right === null) {
      root = root.left;
    } else {
      var node = findMinIt(root.right);
      root.val = node.val;
      root.right = deleteNode(root.right, node.val);
    }
  }
  return root;
};

// in-order successor in a BST
var getSuccessor = function(root, val) {
  var cur = find(root, val);
  if (cur === null) {
    return null;
  }

  if (cur.right !== null) {
    return findMinIt(cur.right);
  } else {
    var successor = null;
    var ancestor = root;
    while (ancestor !== null) {
      if (cur.val < ancestor.val) {
        successor = ancestor;
        ancestor = ancestor.left;
      } else {
        ancestor = ancestor.right;
      }
    }
    return successor;
  }
};

// Binary search - finding first or last occurrence of a number
// sorted array, finding first or last occurrence of a number
// iterative binary search
var bSearchFirst = function(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  var result = -1;
  while (low <= high) {
    var mid = parseInt((low + high) / 2);
    if (arr[mid] === target) {
      result = mid;
      high = mid - 1;
      // low = mid + 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
};

// Count occurrences of a number in a sorted array with duplicates using Binary Search
// O(log n)
var findCount = function(arr, target) {
  var first  = bSearchFirst(arr, target);
  if (first >= 0) {
    var last = bSearchLast(arr, target);
    return last - first + 1;
  }
  return 0;
};

// How many times is a sorted array rotated?
// index of minimum element
// discard half each loop
// find the abnormal
var fundRotationCount = function(arr) {
  var n = arr.length;
  var low = 0;
  var high = n - 1;
  while (low <= high) {
    if (arr[low] <= arr[high]) {
      return low;
    }
    var mid = parseInt((low + high) / 2);
    var next = (mid + 1) % n;
    var prev = (mid + n - 1) % n;
    if (arr[mid] <= next && arr[mid] <= prev) {
      return mid;
    } else if (arr[mid] <= arr[high]) {
      high = mid - 1;
    } else if (arr[mid] >= arr[low]) {
      low = mid + 1;
    }
  }
  return -1;
};

// Search element in a circular sorted array
// discard half anyway
var bSearchInrotated = function(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = parseInt((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] <= arr[high]) {
      if (target > arr[mid] && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else if (arr[low] <= arr[mid]) {
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
};
