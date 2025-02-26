// word: mainpage.html의 <p id="word"> 
const word = document.getElementById('word');

// notButtonInCard: mainpage.html의 <div id="notBtnInCard">
const notButInCard = document.getElementById('notBtnInCard');

// lastBtn, nextBtn: mainpage.html의 <div id="last/nextButton">
const lastBtn = document.getElementById('lastButton');
const nextBtn = document.getElementById('nextButton');

// KorOrEng: 카드가 지금 korean이면 0, english이면 1
let korOrEng = 0;

// index: 카드번호
let index = 0;

// flipTheCard: 현재 카드번호 그대로 카드 뒤집는 함수
function flipTheCard(wordList) {
	if(korOrEng == 0) {
		word.innerHTML = wordList[index].english;
		korOrEng = 1;
	} else {
		word.innerHTML = wordList[index].korean;
		korOrEng = 0;
	}
};

// nextCard: 다음 번호의 카드 보여줌, 다음카드 없으면 알림
function nextCard(wordList) {
	if(index == 50) {
		alert('This is the last card!');
	} else {
		index++;
		word.innerHTML = wordList[index].korean;
	}
}

// lastCard: 이전 번호의 카드 보여줌, 이전카드 없으면 알림
function lastCard(wordList) {
	if(index == 0) {
		alert('This is the first card!');
	} else {
		index--;
		word.innerHTML = wordList[index].korean;
	}
}

// 카드 뒤집기, 이전 카드로, 다음 카드로 성공!!
fetch('./wordList.json')
	.then((response) => {
		return response.json();
	})
	.then((wordList) => {
		word.innerHTML = wordList[index].korean;
		return wordList;
	})
	.then((wordList) => {
		notButInCard.addEventListener('click', (event) => {
			flipTheCard(wordList);
		});
		nextBtn.addEventListener('click', (event) => {
			nextCard(wordList);
		});
		lastBtn.addEventListener('click', (event) => {
			lastCard(wordList);
		});	
	});