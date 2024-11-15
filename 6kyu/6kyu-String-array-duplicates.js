/*

6kyu String array duplicates
https://www.codewars.com/kata/59f08f89a5e129c543000069

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

- dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
- dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

*/

function dup(s) {
	const str = s.map((ele) => {
		// 起始一定可以放，沒有重複
		let key = ele[0]
		let result = ''

		for (let i = 0; i < ele.length; i ++) {
			if (i === 0) {
				result += ele[0]
				continue
			}

			const currentEle = ele[i]

			// 起始當作比較起點，之後直接跟當下的 ele 比較，若不同則代表不是重複，可以放入結果但要重新記錄
			if (key !== currentEle) {
				result += currentEle
				key = currentEle
			}

		}

		return result
	})

	return str
};
