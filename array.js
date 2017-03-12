// Print 2-D array in spiral order
var printSpiral = function(arr, nR, nC) {
  var t = 0;
  var b = nR - 1;
  var l = 0;
  var r = nC - 1;
  var dir = 0;

  while (t <= b &&  <= r) {
    if (dir === 0) {
      for (var i = l; i < r; i++) {
        console.log(arr[t][i]);
      }
      t++;
    } else if (dir === 1) {
      for (var i = t; i < b; i++) {
        console.log(arr[i][r]);
      }
      r--;
    } else if (dir === 2) {
      for (var i = r; i < l; i++) {
        console.log(arr[b][i]);
      }
      b--;
    } else if (dir === 3) {
      for (var i = b; i < t; i++) {
        console.log(arr[i][l]);
      }
      l++;
    }
    dir  = (dir + 1) % 4;
  }
};

// Maximum size square sub-matrix with all 1s
// #include<stdio.h>
// #define bool int
// #define R 6
// #define C 5
//
// void printMaxSubSquare(bool M[R][C])
// {
//   int i,j;
//   int S[R][C];
//   int max_of_s, max_i, max_j;
//
//   /* Set first column of S[][]*/
//   for(i = 0; i < R; i++)
//      S[i][0] = M[i][0];
//
//   /* Set first row of S[][]*/
//   for(j = 0; j < C; j++)
//      S[0][j] = M[0][j];
//
//   /* Construct other entries of S[][]*/
//   for(i = 1; i < R; i++)
//   {
//     for(j = 1; j < C; j++)
//     {
//       if(M[i][j] == 1)
//         S[i][j] = min(S[i][j-1], S[i-1][j], S[i-1][j-1]) + 1;
//       else
//         S[i][j] = 0;
//     }
//   }
//
//   /* Find the maximum entry, and indexes of maximum entry
//      in S[][] */
//   max_of_s = S[0][0]; max_i = 0; max_j = 0;
//   for(i = 0; i < R; i++)
//   {
//     for(j = 0; j < C; j++)
//     {
//       if(max_of_s < S[i][j])
//       {
//          max_of_s = S[i][j];
//          max_i = i;
//          max_j = j;
//       }
//     }
//   }
//
//   printf("\n Maximum size sub-matrix is: \n");
//   for(i = max_i; i > max_i - max_of_s; i--)
//   {
//     for(j = max_j; j > max_j - max_of_s; j--)
//     {
//       printf("%d ", M[i][j]);
//     }
//     printf("\n");
//   }
// }
//
// /* UTILITY FUNCTIONS */
// /* Function to get minimum of three values */
// int min(int a, int b, int c)
// {
//   int m = a;
//   if (m > b)
//     m = b;
//   if (m > c)
//     m = c;
//   return m;
// }
//
// /* Driver function to test above functions */
// int main()
// {
//   bool M[R][C] =  {{0, 1, 1, 0, 1},
//                    {1, 1, 0, 1, 0},
//                    {0, 1, 1, 1, 0},
//                    {1, 1, 1, 1, 0},
//                    {1, 1, 1, 1, 1},
//                    {0, 0, 0, 0, 0}};
//
//   printMaxSubSquare(M);
//   getchar();
// }

// 448. Find All Numbers Disappeared in an Array
var findDisappearedNumbers = function(nums) {
    nums.forEach(function(ele) {
        var idx = Math.abs(ele) - 1;
        nums[idx] = -Math.abs(nums[idx])
    })
    var res = []
    nums.map(function(ele, idx) {
        if(ele > 0){
            res.push(idx + 1);
        }
    })
    return res;
};

// 414. Third Maximum Number
var thirdMax = function(nums) {
    var m1 = null;
    var m2 = null;
    var m3 = null;
    nums.forEach(function(ele){
        if(ele === m1 || ele === m2 || ele === m3){
            return;
        }
        if(m1 === null | ele > m1){
            m3 = m2;
            m2 = m1;
            m1 = ele
        } else if(m2 === null | ele > m2){
            m3 = m2;
            m2 = ele;
        } else if(m3 === null || ele > m3){
            m3 = ele
        }
    })
    return m3 === null ? m1 : m3;
};

// 283. Move Zeroes
var moveZeroes = function(nums) {
    if (nums === null || nums.length === 0){
        return;
    }

    var insertPos = 0;
    nums.forEach(function(ele) {
        if(ele !== 0){
            nums[insertPos] = ele;
            insertPos++;
        }
    })
    while(insertPos < nums.length){
        nums[insertPos] = 0;
        insertPos++;
    }
};

// 268. Missing Number
var missingNumber = function(nums) {
    var res = 0;
    var i = 0;
    while(i < nums.length){
        res = res ^ i
        res = res ^ nums[i];
        i++;
    }
    return res ^ i;
};

// 243	Shortest Word Distance
// public class Solution {
//     public int shortestDistance(String[] words, String word1, String word2) {
//         int idx1 = -1, idx2 = -1, distance = Integer.MAX_VALUE;
//         for(int i = 0; i < words.length; i++){
//             if(words[i].equals(word1)){
//                 idx1 = i;
//                 // 第一次写入idx就先不比较
//                 if(idx2 != -1) distance = Math.min(distance, idx1 - idx2);
//             }
//             if(words[i].equals(word2)){
//                 idx2 = i;
//                 // 第一次写入idx就先不比较
//                 if(idx1 != -1) distance = Math.min(distance, idx2 - idx1);
//             }
//         }
//         return distance;
//     }
// }

// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    var count = 0;
    var i;
    for(i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1]){
            count++;
        } else {
            nums[i - count] = nums[i];
        }
    }
    return nums.length - count;
};

// 27	Remove Element
var removeElement = function(nums, val) {
    var count = 0;
    nums.forEach(function(ele, i){
        if(ele === val){
            count++;
        } else {
            nums[i - count] = nums[i];
        }
    })
    return nums.length - count;
};


// 88. Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;

    while(i >=0 && j >= 0){
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }

    while(j >= 0) {
        nums1[k--] = nums2[j--];
    }
};

// 189. Rotate Array
var rotate = function(nums, k) {
    if(k === 0){
        return;
    }
    var n = nums.length;
    k = k % n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};

var reverse = function(nums, start, end) {
    while(start < end){
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// 66. Plus One
var plusOne = function(digits) {
    for(var i = digits.length; i--;){
        digits[i] = 1 + digits[i];

        if(digits[i] === 10){
            digits[i] = 0;
        } else {
            return digits;
        }
    }

    digits.unshift(1);


    return digits;
};

// 485. Max Consecutive Ones
var findMaxConsecutiveOnes = function(nums) {
    var maxH = 0;
    var max = 0;
    nums.forEach(function(ele) {
        max = Math.max(max, maxH = ele === 0 ? 0 : maxH + 1);
    })
    return max;
};

// 53. Maximum Subarray
var maxSubArray = function(nums) {
    var cur = nums[0];
    var max = nums[0];
    for(var i = 1; i < nums.length; i++){
        if (cur < 0) {
            cur = 0;
        }
        cur += nums[i];
        if(cur > max) {
            max = cur;
        }
    }
    return max;
};

// 118. Pascal's Triangle
var generate = function(numRows) {
    var result = [];

    if(numRows <= 0){
        return result;
    }

    for(var i = 0; i < numRows; i++){
        var cur = [];
        var pre = i > 0 ? result[i - 1] : [];

        for(var j = 0; j <= i; j++){
            if(j === 0){
                cur.push(1);
            } else if(j === i){
                cur.push(1);
            } else {
                cur.push(pre[j] + pre[j-1]);
            }
        }

        result.push(cur);
    }

    return result;
};

// 119. Pascal's Triangle II
var getRow = function(rowIndex) {
    if(rowIndex === null || rowIndex < 0){
        return [];
    }

    var result = [1];

    for(var i = 1; i <= rowIndex; i++){
        var cur = [];

        for(var j = 0; j <= i; j++){
            cur[j] = (result[j - 1] || 0) + (result[j] || 0);
        }

        result = cur;
    }

    return result;
};

// 121. Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
    var max = 0;
    var maxH = 0;
    for(var i = 1; i < prices.length; i++){
        maxH = Math.max(0, maxH += prices[i] - prices[i-1]);
        max = Math.max(max, maxH)
    }
    return max;
};

// 122. Best Time to Buy and Sell Stock II
var maxProfit = function(prices) {
    var max = 0;
    var maxH = 0;
    for(var i = 1; i < prices.length; i++){
        maxH = Math.max(0, prices[i] - prices[i-1]);
        max += maxH
    }
    return max;
};


// 167. Two Sum II - Input array is sorted
var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    while(left < right){
        if(numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
        }

        if(numbers[left] + numbers[right] < target){
            left++;
        } else {
            right--;
        }
    }
};

// 169. Majority Element
var majorityElement = function(nums) {
    var mj = 0;
    var cnt = 1;
    for(var i = 1; i < nums.length; i++){
        if(nums[i] === nums[mj]){
            cnt++;
        } else {
            cnt--;
        }
        if(cnt === 0){
            mj = i;
            cnt = 1;
        }
    }
    return nums[mj];
};

// 35. Search Insert Position
var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while(left <= right){
        var mid = parseInt((left + right)/2);

        var val = nums[mid];

        if(val === target){
            return mid;
        } else if(val > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if(nums[left] < target){
        return left + 1;
    } else {
        return left;
    }
};

// 118. Pascal's Triangle
var generate = function(numRows) {
    var result = [];

    if(numRows <= 0){
        return result;
    }

    for(var i = 0; i < numRows; i++){
        var cur = [];
        var pre = i > 0 ? result[i - 1] : [];

        for(var j = 0; j <= i; j++){
            if(j === 0){
                cur.push(1);
            } else if(j === i){
                cur.push(1);
            } else {
                cur.push(pre[j] + pre[j-1]);
            }
        }

        result.push(cur);
    }

    return result;
};
