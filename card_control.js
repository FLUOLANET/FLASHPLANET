// card: mainpage.html의 <div id="card"> 할당
const card = document.getElementById('card');

// KorOrEng: 카드가 지금 korean이면 0, english이면 1
let korOrEng = 0;

// index: 카드번호
let index = 0;

// flipTheCard: 현재 카드번호 그대로 카드 뒤집는 함수
function flipTheCard(wordList) {
	if(korOrEng == 0) {
		card.innerHTML = wordList[index].english;
		korOrEng = 1;
	} else {
		card.innerHTML = wordList[index].korean;
		korOrEng = 0;
	}
};

// 카드 뒤집는거 까진 성공함 ㅠㅠ
fetch('./wordList.json')
	.then((response) => {
		return response.json();
	})
	.then((wordList) => {
		card.innerHTML = wordList[index].korean;
		return wordList;
	})
	.then((wordList) => {
		card.addEventListener('click', (event) => {
			flipTheCard(wordList);
		});
	})