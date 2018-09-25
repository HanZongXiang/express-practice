const express = require('express');
const path = require('path');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res) => {
  res.render('redirect')
})

app.get('/welcome',(req,res) => {
  res.render('welcome')
})

app.post('/login',(req,res) => {
  res.redirect('/welcome')
})

app.listen(3000)