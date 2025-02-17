fetch('./wordList.json')
	.then((wordData) => {
		return wordData.json();
	})
	.then((wordList) => {
		console.log(wordList["1"].korean);
	});