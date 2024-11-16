/*

6kyu English beggars
https://www.codewars.com/kata/59590976838112bfea0000fa

Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

Note 2: do not modify the input array.

*/

function beggars(values, n){
	const result = []

	// 限制次數
	for (let i = 0; i < n; i ++) {
		let sum = 0

		/**
		 * 實際遍歷 ele 的規則：
		 *   - 以 [(1, 2, 3, 4, 5], 2) 為例
		 *   - 規定次數的迴圈也會重新設定起始位置
		 * */
		for (let j = i; j < values.length; j += n) {
			// **規定次數迴圈第一次**
			// 第一次 [1] i = 0
			// 第二次 [3] i = 2
			// 第三次 [5] i = 4

			// **規定次數迴圈第二次**
			// 第一次 [2] i = 1
			// 第二次 [4] i = 3
			sum += values[j]
		}

		result.push(sum)
	}

	return result
}

