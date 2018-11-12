def merge_sort(arr, &prc)
  return arr if arr.count <= 1
  mid = arr.count / 2
  left_arr = arr[0...mid]
  right_arr = arr[mid..-1]
  merge_helper(merge_sort(left_arr), merge_sort(right_arr), &prc)
end

def merge_helper(left, right, &prc)
  
end