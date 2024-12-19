class Solution {
public:
    var maxChunksToSorted = function (arr) {
	let chunks = 0,	inRange = 0;
	const toBeAddedAtIndex = {};
	for (let i = 0; i < arr.length; i++) {
		arr[i] > i ? (toBeAddedAtIndex[arr[i]] = true) : inRange++;
		toBeAddedAtIndex[i] && inRange++;
		inRange === i + 1 && chunks++;
	}
	return chunks;
};
};
