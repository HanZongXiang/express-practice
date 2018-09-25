const express = require('express');
const path = require('path');
const app = express();

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'))

let count = 0;
setInterval(() => {
  count += 3;
},2000)

app.get('/index',(req,res) => {
  res.render('index',{count})
})

app.get('/second',(req,res) => {
  res.render('second')
})

app.listen(3000)