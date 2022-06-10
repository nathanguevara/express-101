const express = require("express");
const app = express();

const people = require("./data");

const PORT = 8000;

app.use(express.json());

app.get("/people", (req, res) => {
  res.json(people);
});

app.get("/people/:id", (req, res) => {
  const id = req.params.id;

  const person = people.find((person) => person.id === Number(id));
  res.json(person);
});

app.post("/people", (req, res) => {
  const person = {
    id: people.length + 1,
    ...req.body,
  };

  console.log(person);

  people.push(person);
  res.json(person);
});

app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));
