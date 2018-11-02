def bubble_sort(arr, &prc)
  prc ||= Proc.new { |x, y| x <=> y }
  sorted = false
  until sorted
    sorted = true
    arr.each_index do |idx|
      break if idx == arr.length - 1
      if prc.call(arr[idx], arr[idx + 1]) == 1
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
        sorted = false
      end
    end
  end
  arr
end

# TEST CODE
unsorted_arr = [9, 2, 8, 5, 1, 4, 3, 7, 6]
p bubble_sort(unsorted_arr)