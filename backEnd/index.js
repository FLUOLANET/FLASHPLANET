const express = require('express');
const path = require('path')
const app = express();

// 3000번 port에서 listen 시작
app.listen(3000, () => {
   console.log('Started Listening on Port 3000'); 
});

// 정적 파일은 frontEnd 폴더에서 찾음
app.use(express.static(path.join(__dirname, '../frontEnd')));

// '/' -> index.html 띄우기
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

