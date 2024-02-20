const express = require("express")
const app = express()

app.set("view engine", "ejs")
//app.use(logger)

app.get("/", logger, logger,  (req, res) =>{
   // console.log("here")
   // res.send("hoo hoo hoo")
   // res.sendStatus(200)
   // res.status(200).send("hoo hoo hoo")
   // res.status(200).json({message: "hoo hoo hoo"})
   // res.download("server.js")
   res.render("index", {text: "patty"})
})

// Routes----------------------------------
// app.get("/user", (req, res) =>{
//     res.send("Get user")
// })

// app.get("/user/new", (req, res) =>{
//     res.send("new user sigin form")
// })
const userRouter = require('./routes/user')
app.use("/user", userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


app.listen(3001)