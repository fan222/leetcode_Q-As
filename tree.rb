# 235. Lowest Common Ancestor of a Binary Search Tree
# which one is smaller
def lowest_common_ancestor(root, p, q)
    while true
        v1 = root.val - p.val
        v2 = root.val - q.val

        return root if v1 * v2 <= 0
        v1 < 0 ? root = root.right : root = root.left
    end
end

# 437. Path Sum III
def path_sum(root, sum)
    return 0 if root.nil?
    return dfs(root, sum) + path_sum(root.left, sum) + path_sum(root.right, sum)
end

def dfs(root, sum)
   result = 0
   return result if root.nil?
   result += 1 if root.val == sum
   result += dfs(root.left, sum - root.val)
   result += dfs(root.right, sum - root.val)
   return result
end

# 404. Sum of Left Leaves
def sum_of_left_leaves(root)
    return 0 if root.nil? || (root.left.nil? && root.right.nil?)
    l, r = 0, 0
    if !root.left.nil?
       l = (root.left.left.nil? && root.left.right.nil?) ? root.left.val : sum_of_left_leaves(root.left)
    end
    if !root.right.nil?
       r = sum_of_left_leaves(root.right)
    end
    return l + r
end

# 270	Closest Binary Search Tree Value
# Closest Binary Search Tree Value
# Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.
# Note: Given target value is a floating point. You are guaranteed to have only one unique value in the BST that is closest to the target.
def closest_value(root, target)
  result = root.val
  while !root.nil?
    result = (root.val - target).abs < (result - target).abs ? root : result
    root = root.val < target ? root.left : root.right
  end
  result
end

# 257. Binary Tree Paths
def binary_tree_paths(root)
    result = []
    all_paths(root, "", result) unless root.nil?
    result
end

def all_paths(root, path, result)
   result.push(path + "#{root.val}") if root.left.nil? && root.right.nil?
   all_paths(root.left, path + "#{root.val}" + "->", result) unless root.left.nil?
   all_paths(root.right, path + "#{root.val}" + "->" , result) unless root.right.nil?
end

# 100. Same Tree
def is_same_tree(p, q)
    return true if p.nil? && q.nil?
    !p.nil? && !q.nil? && p.val == q.val && is_same_tree(p.left, q.left) && is_same_tree(p.right, q.right)
end

# 101. Symmetric Tree
# base case: what is true, what is false
# induction, depends
# boolean function, use operations instead of return
# intuition almost never works in coding, so try to divide into
# solvable base case and induction
def is_symmetric(root)
    return true if root.nil?
    is_sym(root.left, root.right)
end

def is_sym(p, q)
   return true if p.nil? && q.nil?
   return false if p.nil? || q.nil?
   p.val == q.val && is_sym(p.left, q.right) && is_sym(p.right, q.left)
end

def is_symmetric(root)
    q = []
    return true if root.nil?
    q.push(root.left)
    q.push(root.right)
    until q.empty?
        left = q.shift
        right = q.shift
        next if left.nil? && right.nil?
        return false if left.nil? || right.nil?
        return false if left.val != right.val
        q.push(left.left)
        q.push(right.right)
        q.push(left.right)
        q.push(right.left)
    end
    true
end

# 108. Convert Sorted Array to Binary Search Tree
# how to build a tree
def sorted_array_to_bst(nums)
    return nil if nums.empty?
    root = helper(nums, 0, nums.length - 1)
    root
end

def helper(nums, low, high)
   return nil if low > high

   mid = (low + high) / 2
   # new node, node.left = function, node.right = function
   node = TreeNode.new(nums[mid])
   node.left = helper(nums, low, mid-1)
   node.right = helper(nums, mid+1, high)
   node
end

# 226	Invert Binary Tree
def invert_tree(root)
    if !root.nil?
       root.left, root.right = root.right, root.left
       invert_tree(root.left)
       invert_tree(root.right)
    end
    root
end

# 104. Maximum Depth of Binary Tree
def max_depth(root)
    return 0 if root.nil?
    1 + [max_depth(root.left), max_depth(root.right)].max
end

def max_depth(root)
    return 0 if root.nil?
    result = 0
    result = helper(root, 1, result)
    result
end

def helper(node, local, result)
    result = local if local > result
    result = helper(node.left, local + 1, result) if !node.left.nil?
    result = helper(node.right, local + 1, result) if !node.right.nil?
    result
end

# 112. Path Sum
def has_path_sum(root, sum)
    return false if root.nil?
    return true if root.val == sum && root.left.nil? && root.right.nil?
    has_path_sum(root.left, sum - root.val) || has_path_sum(root.right, sum - root.val)
end

# 111. Minimum Depth of Binary Tree
# as if I know the sub solutions
def min_depth(root)
    return 0 if root.nil?
    left = min_depth(root.left)
    right = min_depth(root.right)
    return (left == 0 || right == 0) ? left+right+1 : [left, right].min + 1
end

# 107. Binary Tree Level Order Traversal II
def level_order_bottom(root)
    return [] if root.nil?
    result = []
    helper(root, 0, result)
    result
end

def helper(node, level, result)
    if level + 1 > result.length
        result.unshift([])
    end
    result[-(level+1)].push(node.val)

    helper(node.left, level + 1, result) if !node.left.nil?
    helper(node.right, level + 1, result) if !node.right.nil?
end

# 110. Balanced Binary Tree
def is_balanced(root)
    return true if root.nil?
    !!getHeight(root)
end

def getHeight(root)
   return -1 if root.nil?

   r = getHeight(root.left)
   l = getHeight(root.right)
   return false if !r || !l || ((l - r).abs > 1)
   1 + [r, l].max
end

# 501. Find Mode in Binary Search Tree
var findMode = function(root) {
    if (root === null) {
        return [];
    }
    var h = {};
    var max = 0;
    traverse(root, h);
    var res = [];
    Object.keys(h).forEach( function(key) {
        if (h[key] > max) {
            max = h[key];
        }
    })
    Object.keys(h).forEach( function(key) {
        if (h[key] === max) {
            res.push(parseInt(key));
        }
    })
    return res;
};

var traverse = function(root, h) {
    if(h[root.val]) {
        h[root.val] += 1;
    } else {
        h[root.val] = 1;
    }

    if(root.left !== null) {
        traverse(root.left, h);
    }

    if(root.right !== null) {
        traverse(root.right, h);
    }
}
