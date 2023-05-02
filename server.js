const express = require("express");
const pokemon = require("./models/pokemon");
const app = express();
const PORT = process.env.PORT || 3000;

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

app.get("/pokemon", (req, res) => {
    // res.send(pokemon)
  res.render('Index', {pokemon});
});


//New
app.get('/pokemon/new', (req, res) => {
  res.render('New')
})

//Create

app.post('/pokemon', (req, res) => {
  pokemon.push(req.body)
  res.redirect('/pokemon')
})

//Show
app.get('/pokemon/:id', (req, res) => {
    // res.send(req.params.id)
    res.render('Show', {pokemonObj: pokemon[req.params.id]})
})



app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});