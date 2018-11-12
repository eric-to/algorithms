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
  combined_arr + left + right
end