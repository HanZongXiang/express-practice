const express = require('express')
// const {Router} = require('express');

const router = express.Router();
const app = express();

let count = 0;
router.get('/01',(req,res,next) => {
  // res.send('router')
  ({count} = req.query);
  count = parseInt(count);
  count += 100;
  next();
},(req,res) => {
  res.send(`加一百后的结果为${count}`)
})

app.use('/demo',router)

app.listen(3000)