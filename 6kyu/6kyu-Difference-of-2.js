/*

6kyu Difference of 2

https://www.codewars.com/kata/5340298112fa30e786000688

Description:
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

```
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
```

*/

function twosDifference(input){
	// 先按照順序排好後做 map 記錄
	const storedMap = [...input].sort((a, b) => a - b).reduce((acc, val) => {
		acc[val] = true
		return acc
	}, {})

	const result = []

	// 遍歷 map 中的屬性，直接在該 key + 2 查找是否有符合的值
	for (const k in storedMap) {
		const nextTwoKey = Number(k) + 2

		if (storedMap[String(nextTwoKey)]) {
			result.push([Number(k), nextTwoKey])
		}
	}

	return result
}
