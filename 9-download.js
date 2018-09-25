const express = require('express');
const path = require('path');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
  res.render('download')
})

app.get('/getDownload',(req,res) => {
  res.download(path.join(__dirname,'./public/img.gif'))
})

app.listen(3000)