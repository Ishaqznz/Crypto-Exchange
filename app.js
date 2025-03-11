const express = require('express')
const app = express()
const session = require("express-session");
const userRouter = require('./routes/userRoute')
const connectDB = require("./config/connectDB");
require("dotenv").config();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')

// Connect to MongoDB
connectDB();


app.use(
    session({
      secret: "your_secret_key", 
      resave: false, 
      saveUninitialized: true,
      cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 3 }, 
    })
);
  

app.use('/', userRouter)


app.listen(2003, () => {
    console.log('Server started on 2003!');
})