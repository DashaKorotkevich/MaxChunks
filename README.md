# MaxChunks


LeetCode Logo
Daily Question
Register
or
Sign in
Premium
Debugging...
Debugging...







Run
Description
Editorial
Editorial
Solutions
Solutions
Submissions
Submissions


Code
Testcase
Test Result
Test Result
769. Max Chunks To Make Sorted
Medium
Topics
Companies
Hint
You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].

We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

Return the largest number of chunks we can make to sort the array.

 

Example 1:

Input: arr = [4,3,2,1,0]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
Example 2:

Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
 

Constraints:

n == arr.length
1 <= n <= 10
0 <= arr[i] < n
All the elements of arr are unique.
Accepted
143.2K
Submissions
236.1K
Acceptance Rate
60.6%
Topics
Companies
Hint 1
Similar Questions
Discussion (108)

Choose a type



Copyright ©️ 2024 LeetCode All rights reserved

3.1K


108



5822 Online
C++

Auto




12345678910111213
class Solution {
public:
    var maxChunksToSorted = function (arr) {
	let chunks = 0,	inRange = 0;
	const toBeAddedAtIndex = {};
	for (let i = 0; i < arr.length; i++) {
		arr[i] > i ? (toBeAddedAtIndex[arr[i]] = true) : inRange++;
		toBeAddedAtIndex[i] && inRange++;
		inRange === i + 1 && chunks++;

Restored from local
Upgrade to Cloud Saving
You need to Login / Sign up to run or submit

Tag
