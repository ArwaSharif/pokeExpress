require('dotenv').config()
const express = require("express");
const Pokemon = require("./models/pokemon");
const app = express();
const PORT = process.env.PORT || 3000;
const { connect, connection } = require('mongoose')

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
connection.once('open', () => {
  console.log('connected to mongo!')
})

//View Engine Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set('views', './views')
app.set("view engine", "jsx");

//Custom Middleware
// set to our entire website
app.use(express.urlencoded({extended:false}))
app.use((req, res, next) => {
  console.log(`I run for all the routes`);
  next();
});


//I.N.D.U.C.E.S
//Index
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", async (req, res) => {
  console.log(`Index Controller Func. running...`)

  try {
    const foundPokemon = await Pokemon.find({})
    res.status(200).render('Index', {pokemon: foundPokemon})
  } catch(err) {
    res.status(400).send(err)
  }
});


//New
app.get('/pokemon/new', (req, res) => {
  res.render('New')
})

//Create

app.post('/pokemon', async (req, res) => {
  try{
    const newPokemon = await Pokemon.create(req.body)
    res.redirect('/pokemon')
  } catch(err) {
    res.status(400).send(err)
  }
})

//Show
app.get('/pokemon/:id', async (req, res) => {
  try{
   const foundPokemon = await Pokemon.findById(req.params.id)
   res.render('Show', {pokemonObj: foundPokemon})
  } catch(err) {
    res.status(400).send(err)
  }
})



app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});