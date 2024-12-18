/*

7kyu The Office III - Broken Photocopier
https://www.codewars.com/kata/57ed56657b45ef922300002b

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

*/

const map = {
	0: '1',
	1: '0'
}

function broken(x){
	return [...x].map((ele) => map[ele]).join('')
}
