const app = express();

const morgan = require('morgan');

app.use(morgan('combined'));

const port = 3000

app.get('/', (req, res) => {
    app.write("<h1>Hello world!</h1>");
    app.send();
})

app.listen(port, (req, res) => {
    console.log("listening on ${port} 3000")
})