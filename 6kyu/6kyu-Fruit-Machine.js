/*

6kyu Fruit Machine
https://www.codewars.com/kata/590adadea658017d90000039

Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)
1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.

*/

const RULE_MAP = {
	Wild: {
		two: 10,
		three: 100
	},
	Star: {
		three: 90,
		two: 9,
		bonus: 18
	},
	Bell: {
		three: 80,
		two: 8,
		bonus: 16
	},
	Shell: {
		three: 70,
		two: 7,
		bonus: 14
	},
	Seven: {
		three: 60,
		two: 6,
		bonus: 12
	},
	Cherry: {
		three: 50,
		two: 5,
		bonus: 10
	},
	Bar: {
		three: 40,
		two: 4,
		bonus: 8
	},
	King: {
		three: 30,
		two: 3,
		bonus: 6
	},
	Queen: {
		three: 20,
		two: 2,
		bonus: 4
	},
	Jack: {
		three: 10,
		two: 1,
		bonus: 2
	}
}

function fruit(reels, spins){
	const counterMap = {}

	spins.forEach((spin, index) => {
		const currentReel = reels[index]
		const targetValue = currentReel[spin]

		if (counterMap[targetValue]) {
			counterMap[targetValue] += 1
		} else {
			counterMap[targetValue] = 1
		}
	})

	const counterEntries = Object.entries(counterMap)

	if (counterEntries.length === 3) {
		return 0
	} else if (counterEntries.length === 2) {
		const { Wild, ...rest } = counterMap
		const [restKey] = Object.keys(rest)
		if (Wild === 1)  {
			return RULE_MAP[restKey].bonus
		} else if (Wild === 2) {
			return RULE_MAP.Wild.two
		} else {
			const correctKey = counterEntries.reduce((stored, [key, value]) => {
				if (value === 2) {
					stored = key
				}

				return stored
			}, '')
			return RULE_MAP[correctKey].two
		}
	} else {
		return RULE_MAP[counterEntries[0][0]].three
	}
}

/* 更好的解決方式 */
function fruit(reels, spins) {
	/* 發現分數是累加的，所以透過 array 以及其 index 當作基礎分數 */
	let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];

	let [a, b, c] = reels
		// 會得到對應的 index + 1 => 代表基礎分數
		.map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
		// 重新整理順序
		.sort((a, b) => a - b);

	// 三個都一樣 => 十倍
	if (a === b && b === c)
		return a * 10;

	// 兩個不同，看是否有搭配 Wind 計算加成分數
	if (a === b)
		return c === 10 ? a * 2 : a;

	return b === c ? b : 0;
}
