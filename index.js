const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
//비밀번호에 특수 기호가 있는 경우 오류 발생 https://www.urlencoder.org/ 에서 인코딩하여 사용
mongoose.connect('mongodb+srv://gyumarin:asasas12%21@boilerplate.vljm8.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected....'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! dfasdfafafaf')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})