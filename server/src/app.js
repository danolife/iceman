import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import tmdb from './tmdb-api';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/watchlist', (req, res, next) => {
  res.send([{name: 'Iron man'}, {name: 'Thor'}, {name: 'Spiderman Homecoming'}]);
  next();
});
app.get('/search', async (req, res, next) => {
  const query = req.query.query;
  const results = await tmdb.search(query);
  res.send(results);
  next();
});
app.get('/movie/:id', async (req, res, next) => {
  const movieId = req.params.id;
  const results = await tmdb.getMovie(movieId);
  res.send(results);
  next();
});

app.listen(process.env.PORT || 8081);
