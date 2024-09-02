/*

6kyu Backspaces in string
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

function cleanString(s) {
	let storedStr = ''

	for (let ss of s) {
		// 遇到 '#' 就後刪除一個 string
		if (ss === '#') {
			storedStr = storedStr.slice(0, storedStr.length - 1)
			// 其他的狀況就直接往後加
		} else {
			storedStr += ss
		}
	}

	return storedStr
}
