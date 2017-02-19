# 232. Implement Queue using Stacks
class MyQueue
    def initialize()
        @in = []
        @out = []
    end

    def push(x)
        @in.push(x)
    end

    def pop()
        if @out.empty?
           @out.push(@in.pop) until @in.empty?
        end
        @out.pop
    end

    def peek()
        if @out.empty?
           @out.push(@in.pop) until @in.empty?
        end
        @out[-1]
    end

    def empty()
        @in.empty? && @out.empty?
    end
end

# 496. Next Greater Element I
def next_greater_element(find_nums, nums)
    h = {}
    stk = []
    nums.each do |num|
       while !stk.empty? && stk[-1] < num
            poped_num = stk.pop
            h[poped_num] = num
       end
       stk.push(num)
    end
    result = []
    find_nums.each do |num|
        h[num] ? result.push(h[num]) : result.push(-1)
    end
    result
end


# 503. Next Greater Element II
def next_greater_elements(nums)
    n = nums.length
    result = Array.new(n, -1)
    s = []
    0.upto(2 * n -1) do |i|
       num = nums[i % n]
       while !(s.empty?) && nums[s[-1]] < num
        poped = s.pop
        result[poped] = num
       end
       s.push(i) if i < n
    end
    result
end

# 71. Simplify Path
def simplify_path(path)
    stk = []
    h = {"" => true, "." => true, ".." => true}
    strs = path.split("/")
    strs.each do |str|
       if str == ".." && !(stk.empty?)
           stk.pop
       elsif !(h[str])
            stk.push(str)
       end
    end
    return "/" if stk.empty?
    "/" + stk.join("/")
end

# 439	Ternary Expression Parser
def parse_ternary(string)
  stk = []
  (string.length).downto(0) do |i|
    c = string[i]
    if !(stk.empty?) && stk.last == '?'
      stk.pop
      first = stk.last
      stk.pop
      stk.pop
      second = stk.last
      stk.pop
      stk.push(c == "T" ? first : second)
    else
      stk.push(c)
    end
  end
  stk.last
end

# 402. Remove K Digits
def remove_kdigits(num, k)
    digits = num.length - k
    stack = []
    top = 0
    num.each_char do |char|
        while !(stack.empty?) && stack[top-1] > char && k > 0
            stack.pop
            k -= 1
        end
        stack.push(char)
    end
    idx = 0
    while (idx < digits && stack[idx] == "0")
        idx += 1
    end

    if idx == digits
        return '0'
    end
    stack.length < digits-idx ? stack[idx..-1].join('') : stack[idx...digits].join("")
end
