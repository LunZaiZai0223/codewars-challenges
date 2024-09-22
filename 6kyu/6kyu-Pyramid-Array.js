/*

6kyu Pyramid Array
https://www.codewars.com/kata/515f51d438015969f7000013/javascript

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

*/

function pyramid(n) {
	return Array.from({ length: n }).map((_, index) => {
		return Array.from({ length: index + 1}).fill(1)
	})
}
