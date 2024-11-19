/*

6kyu Arrays Similar
https://www.codewars.com/kata/51e704f2d8dbace389000279

Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

```
var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
```

```
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
```

*/

function generateArrRecordMap (arr) {
	const recordMap = new Map()

	for (let i = 0; i < arr.length; i ++) {
		if (recordMap.has(arr[i])) {
			recordMap.set(arr[i], recordMap.get(arr[i]) + 1)
		} else {
			recordMap.set(arr[i], 1)
		}
	}

	return recordMap
}

function compareRecordMaps (firstRecordMap, secondRecordMap) {
	for (let [key, value] of firstRecordMap) {

		if (secondRecordMap.has(key) && secondRecordMap.get(key) === value) {
			continue
		} else {
			return false
		}
	}

	return true
}

function arraysSimilar(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false
	}

	const firstRecordMap = generateArrRecordMap(arr1)
	const secondRecordMap = generateArrRecordMap(arr2)

	return compareRecordMaps(firstRecordMap, secondRecordMap)
}
