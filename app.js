const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("inicio", {layout: "principal"});
});

app.get("/busqueda", (req, res) => {
  res.render("templateBusqueda", {layout: "busqueda"});
});

app.get("/busqueda/occidente", (req, res) => {
  res.render("templateOccidente", {layout: "occidente"});
});

app.get("/busqueda/centro", (req, res) => {
  res.render("templateCentro", {layout: "centro"});
});

app.get("/busqueda/oriente", (req, res) => {
  res.render("templateOriente", {layout: "oriente"});
});


app.listen(port, () => console.log(`App listening to port ${port}`));


