/*

6kyu Find the unique number
https://www.codewars.com/kata/585d7d5adb20cf33cb000235

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/

function findUniq(arr) {
	// 先做一個 map 保存，靠 value 計數知道 arr element 是否是唯一的
	const storedMap = arr.reduce((acc, currentVal) => {
		if (acc[currentVal]) {
			acc[currentVal] += 1
		} else {
			acc[currentVal] = 1
		}

		return acc
	}, {})

	for (const key in storedMap) {
		const value = storedMap[key]

		if (value === 1) {
			// 因為 key 是 string，必須額外再轉換型別
			return Number(key)
		}
	}
}
