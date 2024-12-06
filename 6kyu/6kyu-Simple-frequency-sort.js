/*

6kyu Simple frequency sort
https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.

More examples in test cases.

Good luck!

Please also try Simple time difference
*/

function generateMapFromArray (arr) {
	return (arr.reduce((acc, val) => {
		if (acc[val]) {
			acc[val] ++
		} else {
			acc[val] = 1
		}

		return acc
	}, {}))
}


function solve(arr){
	const RECORD_MAP = generateMapFromArray(arr)

	return (
		Object.entries(RECORD_MAP)
			.sort(([aKey, aVal], [bKey, bVal]) => { return bVal - aVal })
			.reduce((acc, [key, val]) => {
				acc.push(...Array(val).fill(Number(key)))
				return acc }, [])
	)
}
