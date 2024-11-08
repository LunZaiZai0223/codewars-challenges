/*

6kyu ls Integer Array?
https://www.codewars.com/kata/52a112d9488f506ae7000b95

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

- returns true  / True if every element in an array is an integer or a float with no decimals.
- returns true  / True if array is empty.
- returns false / False for every other input.

*/

function isIntArray(arr) {
	if (Array.isArray(arr)) {
		const result = arr.every((e) => typeof e === 'number' && !isNaN(e) && Number.isInteger(e))

		return result
	}

	return false
}

