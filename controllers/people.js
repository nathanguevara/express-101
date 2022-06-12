let people = require("../data");

// get all people
const list = (req, res) => {
    res.json(people);
};

// show 1 person
const show = (req, res) => {
    const id = req.params.id;
  
    const person = people.find((person) => person.id === Number(id));
    res.json(person);
  }

  // create 1 person
const create = (req, res) => {
    const person = {
      id: people.length + 1,
      ...req.body,
    };  
    people.push(person);
    res.json(person);
  };
 
const update = (req, res) => {
    const person = people.find((person) => person.id === Number(id));
    const id = req.params.id;
    const foundIndex = people.findIndex((person) => person.id === Number(id));
    const newPerson = {
      ...person,
      ...req.body,
    };
    people.splice(foundIndex, 1, newPerson);
    res.json(newPerson);
  }

const remove = (req, res) => {
    const id = req.params.id;
    const foundIndex = people.findIndex((person) => person.id === Number(id));
    people.splice(foundIndex, 1);
    res.json({ message: `deleted user id: ${id}`});
  }
module.exports = {
    list,
    show,
    create,
    update,
    remove,
};