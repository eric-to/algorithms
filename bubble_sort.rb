def swap(arr, idx_1, idx_2)
  arr[idx_1], arr[idx_2] = arr[idx_2], arr[idx_1]
end

# bubble_sort accepts a Proc for sorting in desired order
def bubble_sort(arr, &prc)
  prc ||= Proc.new { |x, y| x <=> y }

  sorted = false
  until sorted
    sorted = true

    arr.each_index do |idx|
      break if idx == arr.count - 1
      if prc.call(arr[idx], arr[idx + 1]) == 1
        swap(arr, idx, idx + 1)
        sorted = false
      end
    end
  end

  arr
end

# A second approach, which provides a small optimization
def better_bubble_sort(arr, &prc)
  prc ||= Proc.new { |x, y| x <=> y }

  (0...arr.length).each do |i|
    sorted = true
    (0...arr.length - i - 1).each do |j|
      if prc.call(arr[j], arr[j + 1]) == 1
        swap(arr, j, j + 1)
        sorted = false
      end

      return arr if sorted
    end
  end

  arr
end

# TEST CODE
unsorted_arr = [9, 2, 8, 5, 1, 4, 3, 7, 6]
p bubble_sort(unsorted_arr) { |x, y| y <=> x } # should be [9, 8, 7, 6, 5, 4, 3, 2, 1]
p bubble_sort(unsorted_arr) # should be [1, 2, 3, 4, 5, 6, 7, 8, 9]

p better_bubble_sort(unsorted_arr) { |x, y| y <=> x } # should be [9, 8, 7, 6, 5, 4, 3, 2, 1]
p better_bubble_sort(unsorted_arr) # should be [1, 2, 3, 4, 5, 6, 7, 8, 9]