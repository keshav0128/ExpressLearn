const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Get all user")
})

router.get("/new", (req, res) =>{
    res.send("new user sigin form")
})

router.post("/", (req, res) =>{
    res.send("create user")
})
//////////////////////////////////////////////
// router.get("/:id", (req, res) =>{
//     res.send(`get user with an id ${req.params.id}`)
// })

// router.put("/:id", (req, res) =>{
//     res.send(`update user with an id ${req.params.id}`)
// })

// router.delete("/:id", (req, res) =>{
//     res.send(`delete user with an id ${req.params.id}`)
// })
////////////////////////////////////////////////

router
.route("/:id")
.get((req, res) =>{
        console.log(req.userdb)
         res.send(`get user with an id ${req.params.id}`)
     })
.put((req, res) =>{
        res.send(`Update user with an id ${req.params.id}`)
    })
.delete((req, res) =>{
        res.send(`Delete user with an id ${req.params.id}`)
    })

const user = [{ name: "roger" }, { name: "jimmy" }]
router.param("id", (req, res, next, id) =>{
    //console.log(id)
    req.userdb = user[id]
    next()
})
module.exports= router