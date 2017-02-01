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
