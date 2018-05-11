import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/watchlist', (req, res, next) => {
  res.send([{name: 'Iron man'}, {name: 'Thor'}]);
  next();
});

app.listen(process.env.PORT || 8081);