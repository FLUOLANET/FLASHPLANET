const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById('loginModal-outer');
const loginClose = document.getElementById('closeLogin');

// loginBtn 누르면 로그인 modal 튀어나옴
loginBtn.onclick = () => {
    loginModal.style.display = "block";
};

// closeLogin 누르면 로그인 modal 사라짐
loginClose.onclick = () => {
    loginModal.style.display = "none";
};