const express = require("express");
const pokemon = require("./models/pokemon");
const app = express();
const PORT = process.env.PORT || 3000;

//View Engine Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set('views', './views')
app.set("view engine", "jsx");

//I.N.D.U.C.E.S
//Index
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
    // res.send(pokemon)
  res.render('Index', {pokemon});
});

//Show
app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});