def merge_sort(arr, &prc)
  return arr if arr.count <= 1
  prc ||= Proc.new { |x, y| x <=> y }
  mid = arr.count / 2
  left_arr = arr[0...mid]
  right_arr = arr[mid..-1]
  merge_helper(merge_sort(left_arr), merge_sort(right_arr), &prc)
end

def merge_helper(left, right, &prc)
  combined_arr = []
  until left.empty? || right.empty?
    if prc.call(left.first, right.first) == 1
      combined_arr << right.shift
    else
      combined_arr << left.shift
    end
  end
  combined_arr + left + right
end

# TEST code
unsorted_arr = [9, 4, 5, 3, 1, 2, 7, 6, 8]
p merge_sort(unsorted_arr) # should be [1, 2, 3, 4, 5, 6, 7, 8, 9]