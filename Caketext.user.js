((msg, mat = 5, y = 60) => {
	const letters = {
		"a": " * \n* *\n***\n* *\n* *",
		"b": "** \n* *\n** \n* *\n** ",
		"c": " **\n*  \n*  \n*  \n **",
		" ": "   \n   \n   \n   \n   ",
	};


	msg.toLowerCase().split("").forEach((letter, li) => {
		(letters[letter] || "***\n***\n***\n***\n***").split("\n").forEach((row, ri) => {
			row.padEnd(3, " ").slice(0, 3).split("").forEach((block, bi) => {

				noa.setBlock(block === "*" ? mat : 50, [0, y - ri, li * 4 + bi]);

			});
		});
	});
})("the quick brown fox jumps over the lazy dog")
