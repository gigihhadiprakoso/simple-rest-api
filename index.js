const express = require('express')
const bodyParser = require('body-parser')

const users = require('./routes/usersRoute')

const app = express()
const port = (process.env.PORT || 5656)

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Welcome to my app!');
    console.log("", process.env.DATABASE_URL)
})

app.use('/',users)


app.listen(port, () => {
    console.log(`this app listening at http://localhost:${port}`);
})