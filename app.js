const express = require('express')
const app = express()
const userRouter = require('./routes/userRoute')


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')

app.use('/', userRouter)


app.listen(2003, () => {
    console.log('Server started on 2003!');
})