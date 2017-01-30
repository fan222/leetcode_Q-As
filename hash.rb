# 217. Contains Duplicate
def contains_duplicate(nums)
    return false if nums.empty?
    hash = {}
    nums.each do |num|
       if hash[num]
           return true
       else
           hash[num] = true
       end
    end
    false
end

# 219. Contains Duplicate II
def contains_nearby_duplicate(nums, k)
    return false if nums.empty?
  hash = {}
  nums.each_with_index do |num, idx|
     if  hash[num]

         hash[num].each do |i|
            if (i - idx).abs <= k
                return true
            end
         end

         hash[num].push(idx)
     else

        hash[num] = [idx]
     end
  end
  false
end

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

# 447. Number of Boomerangs
# for each point, create a hashmap and count all points with same distance.
# If for a point p, there are k points with distance d,
# number of boomerangs corresponding to that are k*(k-1).
# Keep adding these to get the final result.

# if your solution is too complicated, then you're on wrong path
# try first identify sub problems. start to solve sample input

def number_of_boomerangs(points)
    result = 0
    points.each do |p|
        hash = {}
       points.each do |q|
          x = p[0] - q[0]
          y = p[1] - q[1]
          d = x*x + y*y
          hash[d] ? hash[d] += 1 : hash[d] = 1
       end
       hash.each do |_, v|
          result += v * (v - 1)
       end
    end
    result
end

# 463. Island Perimeter
# always test with simple input.
def island_perimeter(grid)
    il = grid.length
    jl = grid[0].length
    islands, neighbor = 0, 0
    grid.each_with_index do |r, i|
       r.each_with_index do |c, j|
           if c == 1
               islands += 1
              neighbor += 1 if (i < il - 1 && grid[i+1][j] == 1)
              neighbor += 1 if (j < jl - 1 && grid[i][j+1] == 1)
           end
       end
    end
    islands * 4 - neighbor * 2
end
