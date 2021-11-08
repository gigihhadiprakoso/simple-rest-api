const express = require('express')
const bodyParser = require('body-parser')

const users = require('./routes/usersRoute')
const swagger = require('swagger-ui-express')
const swaggerJson = require('./swagger.json')

const app = express()
const port = (process.env.PORT || 5656)

const hostname = process.env.NODE_ENV ? "https://aqueous-forest-78736.herokuapp.com/" : "http://localhost:"+port

const swaggerDocs = JSON.stringify(swaggerJson).replace("__HOST__",hostname);

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Welcome to my app!');
})

app.use('/',users)

app.use('/docs',swagger.serve, swagger.setup(JSON.parse(swaggerDocs)))


app.listen(port, () => {
    console.log(`this app listening at ${hostname}`);
})