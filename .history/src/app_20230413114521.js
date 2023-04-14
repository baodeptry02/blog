import exphbs from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';

const app = express();
const hbs = handlebars.create({
    extname: '.hbs'
  });
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});