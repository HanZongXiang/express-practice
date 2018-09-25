const express = require('express');
const path = require('path');
const formidable = require('formidable');
const app = express();

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'3-图片上传.html'))
})

app.post('/upload',(req,res) => {
  //新建表单管理对象
  const form = new formidable.IncomingForm();
  //设置图片存储位置
  form.uploadDir = path.join(__dirname,'public');
  form.keepExtensions = true;
  form.maxFieldsSize = 4*1024*1024;
  
  form.parse(req,(err,fileds,files) => {
    console.log(files);
  })

  form.on('end',() => {
    res.send('图片上传成功')
  })
})

app.listen(3000)