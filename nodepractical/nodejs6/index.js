const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
const server = express();

//body parser
server.use(express.json());

server.use(morgan("default"));

server.use(express.static("public"));



//API Endpoint Route
//products
//Api root , base url
//C R U D

//create api POST /products
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

//read GET /products
server.get("/products", (req, res) => {
  res.json(products);
});
server.get("/products/:id", (req, res) => {
  const id = (+req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  products.splice(productIndex, 1, {...req.body, id:id})
  res.json(product);
});

//update PUT / products/:id
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});


//delete DELETE / products/:id
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json();
});

//update PATCH / products/:id
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, {...product, ...req.body});
  res.status(201).json(product);
});

server.get("/demo", (req, res) => {
  res.sendStatus(404);
  // res.json(products)
  // res.send('<h1>Hello</h1>');
  //res.status(201).send('<h1>Hello</h1>');
  // res.sendFile(
  //    "/Users/arunp_7/OneDrive/Desktop/Coding/vs coding/nodepractice/index.html"
  // );
});

server.listen(8080, () => {
  console.log("server started");
});
