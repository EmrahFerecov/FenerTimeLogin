const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))
const port = 3000


const checkAuthorized = function (req, res, next) {
    const password = req.body.password
    if (password === "1234") {
        next()
    }
    else {
        res.status(403).send("Unauthorized access");

    }
}



app.post('/login', checkAuthorized,(req, res) => {
    console.log("login is working !!");
    res.send('Welcome CHE')
})


const myLogger = function (req, res, next) {
    console.log('Logged');
    next()
}

const myuserLogger = function (req, res, next) {
    console.log('userLogged');
    next()
}

app.get('/', myLogger, (req, res) => {
    res.send("Hello CHE")
})

app.get('/', myuserLogger, (req, res) => {
    res.send("Hello CHE")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

