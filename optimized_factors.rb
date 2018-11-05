require 'benchmark'

def naive_factors(n)
  list_factors = []
  (1..n).each { |x| list_factors << x if n % x == 0 }
  list_factors
end

def optimized_factors(n)
  list_factors = []
  (1..Math.sqrt(n)).each do |x|
    if n % x == 0
      list_factors << x
      list_factors << n / x unless x == n / x
    end
  end
  list_factors
end

# TEST CODE
Benchmark.bm(17) do |bm|
  bm.report("naive_factors") { naive_factors(1_000_000_000) } # finished 84.6587 seconds
  bm.report("optimized_factors") { optimized_factors(1_000_000_000) } # finished 0.0077 seconds
end