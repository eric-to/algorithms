=begin

---------------
Analysis
---------------
Runtime: O(n^2)
Space: O(1)
Best-case: n

---------------
Description
---------------
Here I've defined two bubble_sort methods. Both are almost functionally the same, except one
requires fewer iterations.

Bubble sort is practically slow on almost all real data sets, so it's better to use other
sorting algorithms, although it runs fairly quickly on small arrays and partially sorted
data (where only a handful of elements are out of place and need to be swapped).

---------------
How it works
---------------
  - check every element against every other element in the array, swapping only when 2
  elements are out of order (accomplished using 2 nested loops)

  - minor optimization: use a boolean to keep track of whether a swap was made on each
  iteration - if not, then return since the array is already sorted

  - minor optimization (used in better_bubble_sort): instead of iterating through the
  entire array in the inner loop, only look at n - i - 1 elements, where i is equal to
  the number of outer iterations we've completed

  why this works: on each iteration of the inner loop, the maximum element gets bubbled up
  (or swapped up) to the end of the array, so after n iterations of the outer loop, the n
  largest elements in the array are located at the very end - therefore, we can avoid
  looking at them

  FIRST ITERATION OF INNER LOOP
  [4, 3, 2, 1]
   ^
  [3, 4, 2, 1]
      ^
  [3, 2, 4, 1]
         ^
  [3, 2, 1, 4]  # the maximum element gets moved to the end of the array
            ^

  SECOND ITERATION OF INNER LOOP
  [3, 2, 1, 4]
   ^
  [2, 3, 1, 4]
      ^
  [2, 1, 3, 4]  # note that after 2 iterations, 3 and 4 are in the correct position
         ^

  THIRD ITERATION OF THE INNER LOOP
  [2, 1, 3, 4]
   ^
  [1, 2, 3, 4]  # we're done, yay!
      ^

=end

def swap(arr, idx_1, idx_2)
  arr[idx_1], arr[idx_2] = arr[idx_2], arr[idx_1]
end

# bubble_sort accepts a Proc for sorting in a specific order
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