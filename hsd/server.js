const express = require('express');
const path = require('path');
const app = express();
var mysql = require('mysql');

app.use(express.static(path.join(__dirname, 'react/build')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydb"
});

const http = require('http').createServer(app);

let id ='';
let pw ='';

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM member", function (err, result, fields) {
      if (err) throw err;
      //console.log('유저',result);
    });
    
});

app.post('/login', function(req, res){
  console.log("post"); 
  id=req.body.id;
  pw=req.body.pw;
  let cnt = 0;
  let query = "select count(*) cnt from member where id='"+ id +"' and password='"+pw+"'";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if(result[0].cnt> 0){
      console.log("로그인 성공");
      cnt =result[0].cnt;
      res.send({id:id, cnt:cnt});
    }
  });
  
})

app.get('/get', function(req, res){
  console.log("get"); 
  res.sendFile(path.join(__dirname, 'react/build/index.html') );
})

// app.post('/post', function(req, res){
//   req.body.
// })



// 8080번 포트에서 서버를 실행할거야
app.listen(8080, () => {
  // 서버가 정상적으로 실행되면 콘솔창에 이 메시지를 띄워줘
  console.log("Listening on 8080");
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'react/build/index.html') );
})