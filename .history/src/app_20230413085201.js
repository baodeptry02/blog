const express = require('express')

const app = express();

const morgan = require('morgan');

app.use(morgan('combined'));

const port = 3000

app.get('/', (req, res) => {
    res.write("<h1>Hello world!</h1>");
    res.send();
})

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`)
})