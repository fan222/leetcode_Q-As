# 1
# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
#
# You may assume that each input would have exactly one solution.
#
# Example:
# Given nums = [2, 7, 11, 15], target = 9,
#
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].
def two_sum(nums, target)
  store = Hash.new()
  nums.each_with_index do |num, idx|
    if store.key?(target - num)
      return [store[target - num], idx]
    else
      store[num] = idx
    end
  end
end


# 2
# You are given two linked lists representing two non-negative numbers.
# The digits are stored in reverse order and each of their nodes contain a single digit.
# Add the two numbers and return it as a linked list.
#
# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

def add_two_numbers(l1, l2)
  result = ListNode.new(0)
  node = result
  l1_node = l1
  l2_node = l2
  carry,remainder,sum = 0, 0, 0
  while (!l1_node.nil? || !l2_node.nil? || carry != 0)
    sum = (!l1_node.nil? ? l1_node.val : 0) + (!l2_node.nil? ? l2_node.val : 0) + carry
    carry = sum / 10
    remainder  = sum % 10
    node.next = ListNode.new(remainder)
    node = node.next
    l1_node = !l1_node.nil? ? l1_node.next : nil
    l2_node = !l2_node.nil? ? l2_node.next : nil
  end
  result.next
end


# 3
# Given a string, find the length of the longest substring without repeating characters.
#
# Examples:
#
# Given "abcabcbb", the answer is "abc", which the length is 3.
#
# Given "bbbbb", the answer is "b", with the length of 1.
#
# Given "pwwkew", the answer is "wke", with the length of 3.
#
# Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

# require 'set'

#to_set

# def length_of_longest_substring(s)
#   return 0 if s.empty?
#   store = []
#   result = nil
#   s.each_char do |char|
#       idx = store.index(char)
#     if idx
#       store = store[idx+1..-1]+ [char]
#     else
#       store += [char]
#     end
#     if result.nil? || store.length > result
#       result = store.length
#     end
#   end
#   result
# end

def length_of_longest_substring(s)
  return 0 if s.empty?
  store = Hash.new()
  result = 0
  i = 0
  s.each_char.with_index do |char, idx|
    if store[char]
      i = i > store[char] ? i : store[char]
    end
    result = result > idx-i+1 ? result : idx-i+1
    store[char] = idx+1
  end
  result
end


# 4
# There are two sorted arrays nums1 and nums2 of size m and n respectively.

# Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

def find_median_sorted_arrays(nums1, nums2)
  l1 = nums1.length
  l2 = nums2.length
  store = []
  i = 0
  j = 0
  k = 0
  while true
    if (j == l1 && k < l2)
      store.push(nums2[k])
      k += 1
    elsif (j < l1 && k == l2)
      store.push(nums1[j])
      j += 1
    elsif nums1[j] > nums2[k]
      store.push(nums2[k])
      k += 1
    elsif nums2[k] >= nums1[j]
      store.push(nums1[j])
      j += 1
    end
    i += 1
    if (l1+l2).even?
      if i == (l1+l2)/2+1
        return (store[-2] + store[-1])/2.0
      end
    else
      if i == (l1+l2)/2+1
        return store.last.to_f
      end
    end
  end
end


# 5
# Given a string s, find the longest palindromic substring in s.
# You may assume that the maximum length of s is 1000.

# def longest_palindrome(s)
#   start_idx = 0
#   end_idx = 0
#   length = s.length
#   i = 0
#   while i < length
#     left, right = i, i
#     while(left >= 0 && right < length && s[left] == s[right])
#       left -= 1
#       right += 1
#     end
#     l1 = right - left - 1
#     left, right = i, i+1
#     while(left >= 0 && right < length && s[left] == s[right])
#       left -= 1
#       right += 1
#     end
#     l2 = right - left - 1
#     l = l1 > l2 ? l1 : l2
#     if (l > end_idx - start_idx)
#       start_idx = i - (l - 1) / 2
#       end_idx = i + l / 2
#     end
#     i += 1
#   end
#   s[start_idx..end_idx]
# end

def longest_palindrome(s)
  start_idx = 0
  end_idx = 0
  length = s.length
  i = 0
  while i < length
    l1 = expand(s, i , i)
    l2 = expand(s, i , i + 1)
    l = l1 > l2 ? l1 : l2
    if (l > end_idx - start_idx)
      start_idx = i - (l - 1) / 2
      end_idx = i + l / 2
    end
    i += 1
  end
  s[start_idx..end_idx]
end

def expand(s, left, right)
  length = s.length
  while(left >= 0 && right < length && s[left] == s[right])
    left -= 1
    right += 1
  end
  right - left - 1
end

# 6
def convert(s, num_rows)
  return s if s.length < 3 || num_rows < 2
  result = ""
  i = 0
  length = s.length
  lag = 2 * (num_rows - 1)
  while i < num_rows
    j = i
    while j < length
      result += s[j]
      if i > 0 && i < num_rows - 1
        t = j + lag - 2 * i
        if t < length
          result += s[t]
        end
      end
      j += lag
    end
    i += 1
  end
  result
end

# 7
def reverse(x)
  nums = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"]
  digits = x.to_s.split("")
  if nums.include?(digits[0])
    result = digits.reverse.join("").to_i
  else
    result = 0 - digits.reverse.join("").to_i
  end
  return result.between?(-2147483648, 2147483647) ? result : 0
end


# 8


# 9
def is_palindrome(x)
  if x < 0
    return false
  elsif x == 0
    return true
  elsif x % 10 == 0
    return false
  end

  result = 0
  num = x
  while result < num
    result = result * 10 + num % 10
    num = num / 10
  end

  return result == num || result / 10 == num
end


# 10


# 55
def can_jump(nums)
    length = nums.length
    return true if length < 2
    (length-2).downto(0).each do |idx|
        if nums[idx] == 0
           needed_jump = 1
           while needed_jump > nums[idx]
            needed_jump += 1
            idx -= 1
            return false if idx < 0
            end
        end
    end
    true
end


# 56
def merge(intervals)
  result = []
  new_intervals = intervals.sort_by{|interval| interval.start}
  new_intervals.each do |interval|
    if result.empty?
      result.push(interval)
    elsif result.last.end >= interval.start
      result[-1] = Interval.new(result[-1].start, [result[-1].end, interval.end].max)
    else
      result.push(interval)
    end
  end
  result
end


# 57
def insert(intervals, new_interval)
    s, e = new_interval.start, new_interval.end
    left, right = [], []
    intervals.each do |interval|
        if interval.end < s
            left.push(interval)
        elsif interval.start > e
            right.push(interval)
        else
            s = [s, interval.start].min
            e = [e, interval.end].max
        end
    end
    left+[Interval.new(s, e)]+right
end


# 461
def hamming_distance(x, y)
    str = x ^ y
    str = str.to_s(2)
    result = 0
    str.each_char do |char|
       result += 1 if char == "1"
    end
    result
end
