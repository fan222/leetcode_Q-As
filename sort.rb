# NO.252 Meeting Rooms
# Given an array of meeting time intervals consisting of start and end times
# [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

# 242. Valid Anagram
def is_anagram(s, t)
    return false if s.length != t.length

    s_hash = {}
    s.each_char do |char|
       s_hash[char] ? s_hash[char] += 1 : s_hash[char] = 1
    end

    t_hash = {}
    t.each_char do |char|
       t_hash[char] ? t_hash[char] += 1 : t_hash[char] = 1
    end

    s_hash.each do |k, v|
       if v != t_hash[k]
           return false
       end
    end
    true
end


# 349. Intersection of Two Arrays
def intersection(nums1, nums2)
    result = []
    nums1.each do |num|
        result.push(num) if (!result.include?(num) && nums2.include?(num))
    end
    result
end


# 350. Intersection of Two Arrays II
def intersect(nums1, nums2)
    h = {}
    result = []
    nums1.each do |num|
       h[num] ? h[num] += 1 : h[num] = 1
    end

    nums2.each do |num|
       if h[num]
           if h[num] > 0
            result.push(num)
            h[num] -= 1
           end
       end
    end
    result
end

# 179. Largest Number
def largest_number(nums)
    strs = nums.map{|num| num.to_s}
    strs.sort! do |a, b|
       sum1 = (a + b).to_i
       sum2 = (b + a).to_i
        sum2 <=> sum1
    end
    result = strs.join("")
    return "0" if strs[0] == "0"
    result
end

# 75. Sort Colors
def sort_colors(nums)
    r, w = 0, 0
    nums.each_with_index do |num, idx|
       val = num
       nums[idx] = 2
       if val < 2
           nums[w] = 1
           w += 1
       end
       if val < 1
            nums[r] = 0
            r += 1
        end
    end
end
# first version is to count red, whith and blue.
# second, in-place 'swap', with two counters
