/*

6kyu Length of missing array
https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

*/

function getLengthOfMissingArray(arrayOfArrays) {
	if (arrayOfArrays === null || arrayOfArrays.length === 0) {
		return 0
	}

	const lengthMap = arrayOfArrays.reduce((map, eles) => {
		if (!Array.isArray(eles)) {
			return map
		}

		const elesLength = eles.length

		if (map[elesLength]) {
			map[elesLength] += 1
		} else {
			map[elesLength] = 1
		}

		return map
	}, {})

	const sortedKeys = Object.keys(lengthMap).sort((a, b) => Number(a) - Number(b))

	if (sortedKeys.length < 2) {
		return 0
	}

	for (let i = 0; i < sortedKeys.length; i ++) {
		const current = Number(sortedKeys[i])

		if (current === 0) {
			return 0
		}

		const next = Number(sortedKeys[i + 1])
		const nextShouldBe = current + 1

		if (next !== nextShouldBe) {
			return nextShouldBe
		}
	}

	return 0
}
