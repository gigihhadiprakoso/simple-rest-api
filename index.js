const express = require('express')
const bodyParser = require('body-parser')

const users = require('./routes/usersRoute')
const swagger = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

const app = express()
const port = (process.env.PORT || 5656)

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Welcome to my app!');
})

app.use('/',users)

app.use('/docs',swagger.serve, swagger.setup(swaggerDocs))


app.listen(port, () => {
    console.log(`this app listening at http://localhost:${port}`);
})