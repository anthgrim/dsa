What type of sorting algorithm you'd use for the following scenarios:

1. Sort 10 schools around your hour by distance: Insertion Sort. Fast on small sorts

2. eBay sorts listing by the current bid amount: Radix or Counting Sort. A bid is always a number that needs to be sorted. It's a fix length of numbers

3. Sort scores on ESPN: Quick Sort

4. Massive database (can't fit all into memory) needs to sort through past year's user data: Merge Sort. Because we are not gonna be sorting in memory, so we can worry about the performance. So no matter what, we can get n log n

5. Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion Sort. The list is already almost sorted

6. Temperature Records for the past 50 years in Canada: Quick Sort if there's decimals, Radix or Counting Sort (if the temps don't have decimal places)

7. Large user name database needs to be sorted. Data is very random: Quick Sort if the data is not that large and Merge Sort if we have enough memory
8. You want to teach sorting for the first time: Bubble sort
