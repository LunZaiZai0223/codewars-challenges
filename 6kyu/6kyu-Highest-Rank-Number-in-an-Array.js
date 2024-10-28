/*

6kyu Highest Rank Number in an Array
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
It’s guaranteed that array contains at least 3 numbers.

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

function highestRank(arr){
	/** 做一個 map 紀錄每個 arr element 重複的次數 */
	const arrMap = arr.reduce((result, currentEle) => {
		if (result[currentEle]) {
			result[currentEle] += 1
		} else {
			result[currentEle] = 1
		}

		return result
	}, {})

	/** 取得最大的重複次數 */
	const theMostFrequentNum = Math.max(...Object.values(arrMap))
	/** 從 map 中找出符合最大重複次數的 element */
	const mostFrequentValues = Object.entries(arrMap).reduce((result, [key, value]) => {
		if (value === theMostFrequentNum) {
			/** 因為 map 的 key 會隱性地轉型，所以要轉回數字 */
			result.push(Number(key))
		}

		return result
	}, [])

	/** 若有重複次數的 element 則照題目只回傳最大的 element */
	return Math.max(...mostFrequentValues)
}

/** 不先用 Math.max() 遍歷得出最多的重複此時 + 最後不額外再用 Math.max() 遍歷比較
 *  改用一個迴圈取得最大重複的次數 + 若有重複次數的 element 則取最大
 * */
function highestRank(arr){
	/** 做一個 map 紀錄每個 arr element 重複的次數 */
	const arrMap = arr.reduce((result, currentEle) => {
		if (result[currentEle]) {
			result[currentEle] += 1
		} else {
			result[currentEle] = 1
		}

		return result
	}, {})

	let theMostFrequentTime = 0
	let result = 0

	Object.entries(arrMap).forEach(([key, value]) => {
		const formattedKey = Number(key)
		if (value >= theMostFrequentTime && result < formattedKey) {
			theMostFrequentTime = value
			result = formattedKey
		}
	})

	return result
}
