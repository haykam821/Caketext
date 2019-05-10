((msg, mat = 2, y = 50) => {
	const letters = {
		"a": " * \n* *\n***\n* *\n* *",
		"b": "** \n* *\n** \n* *\n** ",
		"c": " **\n*  \n*  \n*  \n **",
		"d": "** \n* *\n* *\n* *\n** ",
		"e": "***\n*  \n** \n*  \n***",
		"f": "***\n*  \n** \n*  \n*  ",
		"g": "   \n   \n   \n   \n   ",
		"h": "* *\n* *\n***\n* *\n* *",
		"i": "***\n * \n * \n * \n***",
		"j": "***\n  *\n  *\n  *\n** ",
		"k": "* *\n* *\n** \n* *\n* *",
		"l": "*  \n*  \n*  \n*  \n***",
		"m": "   \n   \n   \n   \n   ",
		"n": "   \n   \n   \n   \n   ",
		"o": " * \n* *\n* *\n* *\n * ",
		"p": "** \n* *\n** \n*  \n*  ",
		"q": "   \n   \n   \n   \n   ",
		"r": "** \n* *\n** \n* *\n* *",
		"s": " **\n*  \n **\n  *\n** ",
		"t": "***\n * \n * \n * \n * ",
		"u": "* *\n* *\n* *\n* *\n***",
		"v": "* *\n* *\n* *\n* *\n * ",
		"w": "*   *\n*   *\n* * *\n* * *\n * * ",
		"x": "* *\n* *\n * \n* *\n* *",
		"y": "* *\n* *\n * \n * \n * ",
		"z": "   \n   \n   \n   \n   ",
		" ": "   \n   \n   \n   \n   ",
	};

	let pos = 0;

	msg.toLowerCase().split("").forEach((letter, li) => {
		const rows = (letters[letter] || "***\n***\n***\n***\n***").split("\n");
		const rowLength = rows[0].length;
		
		rows.forEach((row, ri) => {
			row.padEnd(rowLength, " ").slice(0, 3).split("").forEach((block, bi) => {

				noa.setBlock(block === "*" ? mat : 50, [0, y - ri, pos + bi]);

				if (bi === row.length - 1 && ri === rows.length - 1) {
					pos += rowLength + 1;
				}
			});
		});
	});
})("the quick brown fox jumps over the lazy dog")
