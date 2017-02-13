# Leetcode: 346. Moving Average from Data Stream
class MovingAverage
  def initialize(size)
    @size = size
    @queue = []
    @sum = 0
  end

  def next(num)
    if @queue.count < size
      @sum += num
      @queue.push(num)
      @sum / @queue.count
    else
      remove = @queue.shift
      @queue.push(num)
      @sum += num
      @sum -= remove
      @sum / @size
    end
  end
end


# 363. Max Sum of Rectangle No Larger Than K
