# Flatten Nested List
def flatten_array(arr)
  res = []
  arr.each do |ele|
    if ele.is_a?(Array)
      res += flatten_array(ele)
    else
      res += [ele]
    end
  end
  return res
end
