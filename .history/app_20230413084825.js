const app = express();

const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
    app.write("<h1>Hello world!</h1>");
    app.send();
})