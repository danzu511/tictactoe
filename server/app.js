const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');

const uri = process.env.URI;
const dbName = 'tictactoe';
const gameSchema = new mongoose.Schema({
  turns: Array,
  points: Array,
  dates: Array,
  winner: String,
  turnCount: Number,
  ip: String,
});
const Game = mongoose.model('Game', gameSchema);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to ${dbName} database`))
  .catch((err) => console.error(err));

app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/loadGames', async (req, res) => {
  try {
    const { ip } = req.query;
    const games = await Game.find({ ip });
    res.send(games);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving games');
  }
});

/* app.get('/loadGames', (req, res) => {
    // Read the JSON file
    const data = fs.readFileSync('db.json');

    // Parse the contents of the file into an array of game objects
    const gameObjects = JSON.parse(data.toString());

    // Send the array of game objects as a response
    res.send(gameObjects);
});
 */
app.post('/storeGame', async (req, res) => {
  const gameObject = req.body;

  try {
    const game = new Game(gameObject);
    await game.save();

    res.send('Received gameObject and saved to database');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error storing game');
  }
});

/* app.post('/storeGame', (req, res) => {
    const gameObject = req.body;

    // Read the JSON file
    let data = fs.readFileSync('db.json');
    let games = [];

    // If the file is not empty, parse the JSON
    if (data.length > 0) {
      games = JSON.parse(data);
    }

    // Add the gameObject to the games array
    games.push(gameObject);

    // Write the updated array to the JSON file
    fs.writeFileSync('db.json', JSON.stringify(games));

    res.send('Received gameObject and saved to db.json');
  }); */

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
