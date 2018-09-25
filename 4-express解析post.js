const express = require('express');
const path = require('path');
const qs = require('qs');
const bodyParser = require('body-parser')
const app = express()

//所有情况都解析
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '2-post请求表单.html'))
})

app.post('/login', bodyParser.urlencoded({extended:false}),(req,res) => {
  const {username,password} = req.body
  // let data = '';
  // req.on('data',chunk => {
  //   data += chunk
  // })
  // req.on('end',() => {
    // console.log(data);
  //   console.log(qs.parse(data));
  //   console.log(qs.stringify(qs.parse(data)));
  //   let obj = {
  //     msg:'object property',
  //     desc:'object description'
  //   };
  //   console.log(qs.stringify(obj));
  // })
  res.send(`
      <h1>用户名是${username}</h1>
      <h2>密码是${password}</h2>
  `)
})

app.listen(3000)