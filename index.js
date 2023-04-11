// j'utilise le module express
const express = require("express");
// je défini le port par defaut de l'API
const serverPort = 8000;
// je rend accessible les méthodes d'express
const app = express();
// Liste des utilisateurs
// id - firstname - lastname - email - gender

const users = [
  {
    id: 1,
    firstname: "Corty",
    lastname: "Charlo",
    email: "ccharlo0@squidoo.com",
    gender: "Male",
  },
  {
    id: 2,
    firstname: "Mohandis",
    lastname: "Holtham",
    email: "mholtham1@google.co.uk",
    gender: "Male",
  },
  {
    id: 3,
    firstname: "Lura",
    lastname: "Attride",
    email: "lattride2@odnoklassniki.ru",
    gender: "Female",
  },
  {
    id: 4,
    firstname: "Geoffrey",
    lastname: "Hawkins",
    email: "ghawkins3@cloudflare.com",
    gender: "Male",
  },
  {
    id: 5,
    firstname: "Millisent",
    lastname: "Lampke",
    email: "mlampke4@sakura.ne.jp",
    gender: "Female",
  },
  {
    id: 6,
    firstname: "Ambrosi",
    lastname: "Babcock",
    email: "ababcock5@businessinsider.com",
    gender: "Male",
  },
  {
    id: 7,
    firstname: "Rachel",
    lastname: "Redmond",
    email: "rredmond6@usnews.com",
    gender: "Female",
  },
  {
    id: 8,
    firstname: "Arlina",
    lastname: "Ghidoni",
    email: "aghidoni7@wsj.com",
    gender: "Female",
  },
  {
    id: 9,
    firstname: "Margalit",
    lastname: "Swanborrow",
    email: "mswanborrow8@imageshack.us",
    gender: "Female",
  },
  {
    id: 10,
    firstname: "Othilia",
    lastname: "Marini",
    email: "omarini9@businesswire.com",
    gender: "Female",
  },
  {
    id: 11,
    firstname: "Chandra",
    lastname: "Hewell",
    email: "chewella@domainmarket.com",
    gender: "Female",
  },
  {
    id: 12,
    firstname: "Davita",
    lastname: "Fidler",
    email: "dfidlerb@miitbeian.gov.cn",
    gender: "Female",
  },
  {
    id: 13,
    firstname: "Fae",
    lastname: "Bodell",
    email: "fbodellc@yandex.ru",
    gender: "Female",
  },
  {
    id: 14,
    firstname: "Ewart",
    lastname: "Goodreid",
    email: "egoodreidd@guardian.co.uk",
    gender: "Male",
  },
  {
    id: 15,
    firstname: "Elianore",
    lastname: "Leigh",
    email: "eleighe@boston.com",
    gender: "Agender",
  },
];

app.get("/users", (request, response) => {
  response.send(users);
});

app.get("/users/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const user = users.find((user) => user.id === id);

  if (user) response.send(user);
  else response.sendStatus(404);
});

// je lance le serveur
app.listen(serverPort, () => {
  console.log("Le server est demarré");
});
