const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// PDF P.4 やってみよう0 に対応 (res.sendで直接応答)
app.get("/english", (req, res) => {
  res.send('Good Morning');
});
app.get("/france", (req, res) => {
  res.send('Bonjour');
});
app.get("/germany", (req, res) => {
  res.send('Guten Morgen');
});

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

// PDF P.33 やってみよう4 に対応 (テンプレートファイル 'greeting' を使用)
app.get("/english_tmplt", (req, res) => {
  res.render('greeting', { message:"Good Morning" }); // greeting.ejsを使用することを想定
});
app.get("/france_tmplt", (req, res) => {
  res.render('greeting', { message:"Bonjour" });
});
app.get("/germany_tmplt", (req, res) => {
  res.render('greeting', { message:"Guten Morgen" });
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  else if( num==3 ) luck = '小吉';
  else if( num==4 ) luck = '末吉';
  else if( num==5 ) luck = '凶';
  else luck = '大凶'; // num==6 の場合
  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  // omikuji2の処理は既に大吉〜大凶の6通りで満たされている
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  else if( num==3 ) luck = '小吉';
  else if( num==4 ) luck = '末吉';
  else if( num==5 ) luck = '凶';
  else luck = '大凶'; // num==6 の場合
  res.render( 'omikuji2', {result:luck} );
});

// PDF P.34 やってみよう5 に対応 (結果とコメントの2つの値を渡す)
app.get("/omikuji3", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  let comment = ''; // コメント用の変数を追加 [cite: 150]
  
  if( num==1 ) {
    luck = '大吉';
    comment = '絶好調です！'; // 大吉のコメント [cite: 151]
  } else if( num==2 ) {
    luck = '中吉';
    comment = 'まずまずの運勢です。';
  } else if( num==3 ) {
    luck = '小吉';
    comment = '注意深く行動しましょう。';
  } else if( num==4 ) {
    luck = '末吉';
    comment = '努力が報われるでしょう。';
  } else if( num==5 ) {
    luck = '凶';
    comment = '慎重に行動してください。';
  } else { // num==6 の場合
    luck = '大凶';
    comment = '今日は無理をしない方が良いでしょう。';
  }
  
  // result:luck, comment:comment のように2つの値を渡す 
  res.render( 'omikuji3', {result:luck, comment:comment} ); // omikuji3.ejsを使用することを想定
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));