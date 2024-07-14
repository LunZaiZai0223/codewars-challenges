/*

6kyu WeIrD StRiNg CaSe
https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
	return string.split(' ').map((e) => {
		let temp = ''
		for (let i = 0; i < e.length; i ++) {
			if (i % 2 === 0) {
				temp += e[i].toUpperCase()
			} else {
				temp += e[i].toLowerCase()
			}
		}

		return temp
	}).join(' ')
}
