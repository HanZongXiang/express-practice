const express = require('express');
const path = require('path')
const app = express()

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'1-get请求表单.html'))
})

app.get('/login',(req,res) => {
  const {username,password} = req.query;
  res.send(`
      <h1>用户名是${username}</h1>
      <h2>密码是${password}</h2>
  `)
})

app.listen(3000)