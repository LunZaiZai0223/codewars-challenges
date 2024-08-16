/*

5kyu Find the unique string
https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

There is an array of strings. All strings contains similar letters except one. Try to find it!

```
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
```

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

This is the second kata in series:

1. [Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)
2. Find the unique string (this kata)
3. Find The Unique

*/

function check (currentEle = '', comparedMap) {
	let result = true

	for (let i = 0; i < currentEle.length; i ++) {
		const currentEleChar = currentEle[i]
		if (!comparedMap[currentEleChar]) {
			result = false
			break
		}
	}

	return result
}

function findUniq(arr) {
	// 遍歷讀取每個陣列的 element
	for (let i = 0; i < arr.length; i ++) {
		const currentEle = arr[i]
		// 都改成小寫，方便 map 比對
		const formattedCurrentEleStr = currentEle.toLowerCase()
		// 每個 element 按照字母做 map
		const formattedCurrentEleStrMap = [...formattedCurrentEleStr].reduce((acc, val) => {
			if (!acc[val]) {
				acc[val] = 1
			}

			return acc
		}, {})

		// 避免該 element 為空字串 = 不必要比對
		if (Object.keys(formattedCurrentEleStrMap).length === 0) {
			continue
		}

		/* 若 findLastIndex（從後面）以及 findIndex（從前面）的 index 為相同 = 為唯一的 element */
		/* 必須要比完，避免後續的 element 其實有相同的 */
		const lIndex = arr.findLastIndex((ele) => {
			// 若為空字串則強制跳過
			if (ele === '') return false
			return check(ele.toLowerCase(), formattedCurrentEleStrMap)
		})

		const normalIndex = arr.findIndex((ele) => {
			// 若為空字串則強制跳過
			if (ele === '') return false
			return check(ele.toLowerCase(), formattedCurrentEleStrMap)
		})

		if (normalIndex === lIndex) {
			return arr[i]
		}
	}
}

// 筆記其他答案
// Set => The Set object lets you store unique values of any type
function findUniq(arr) {
	/*
	* [ 'aaaaa', '  ','  ', 'a', ' ', ' ' ] => ['a', ' ', ' ', 'a', ' ', ' ']
	* 用 Set 去除該筆 element 相同的部分並且按照字母排序
	* */
	let newArr = arr.map(a => { return [...new Set(a.toLowerCase())].sort().join('') });
	// 每筆 element 遍歷，並且同步判斷前後的 index 是否一致 = 唯一的
	for (let i = 0; i < newArr.length; i++) {
		if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]) ) return arr[i];
	}
}
