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
