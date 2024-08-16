/*

5kyu String incrementer
https://www.codewars.com/kata/54a91a4883a7de5d7800009c

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

`foo -> foo1`

`foobar23 -> foobar24`

`foo0042 -> foo0043`

`foo9 -> foo10`

`foo099 -> foo100`

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString(strng) {
	/** 
	 * 若字串包含數字，則會將數字分開，並且最後一個 element 為空字串
	 * 'foo123' => ['foo', '123', '']
	 * 'foo123foo' => ['foo', '123', 'foo']
	 * 'foofoo' => ['foofoo']
	 * */
	const splitStrArr = strng.split(/(\d+)/)
	const endsWithNum = splitStrArr[splitStrArr.length - 1] === ''
	let incrementer = 0

	if (!endsWithNum) {
		incrementer += 1
		return strng + incrementer
	}

	// 因為最後一個為空字串，因此要額外篩出
	const correctSplitStrArr = splitStrArr.slice(0, splitStrArr.length - 1)
	const lastEle = correctSplitStrArr[correctSplitStrArr.length - 1]

	if (lastEle.startsWith('0')) {
		let counter = 0
		let next = true

		/**
		 * 迴圈取得數字開頭有幾個 0
		 * 000123 => counter = 3
		 */
		while (next) {
			if (lastEle[counter] === '0') {
				counter += 1
			} else {
				next = false
			}
		}

		// 排除 0 後的數字，以便正確地相加
		const formattedNum = Number(lastEle.slice(counter))
		const tempResult = formattedNum + 1

		if (tempResult.toString().startsWith('1')) {
			// 只有十進位的可能，所以得到的數字若開頭為 1，則強制刪除前面一個 0
			incrementer = '0'.repeat(counter - 1) + tempResult
		} else {
			// 若開頭不是 1，則直接加總
			incrementer = '0'.repeat(counter) + tempResult
		}

	} else {
		const numLastEle = Number(lastEle)
		incrementer = Number(numLastEle) + 1
	}

	const result = correctSplitStrArr.map((s, index, _self) => {
		if (index === _self.length - 1) {
			return incrementer
		}

		return s
	}).join('')

	return result
}