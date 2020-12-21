const express = require("express");
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const bodyParser = require("body-parser");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const uniqid = require("uniqid");
const { uuid } = require("uuidv4");
// import { v4 as uuid } from "uuid";
// import { v4 as uuid } from 'uuid';

const privkey = fs.readFileSync("/etc/letsencrypt/live/llex.one/privkey.pem");
const cert = fs.readFileSync("/etc/letsencrypt/live/llex.one/fullchain.pem");
const options = {
  key: privkey,
  cert: cert,
};

const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({
  contacts: [],
  users: {
    // name: {
    // pass: '', //_____УВАГА, ПАРОЛЬ КОРИСТУВАЧА ЗБЕРІГАЄТЬСЯ У ВІДКРИТОМУ СТАНІ______
    // contacts: []
    // },
  },
  usersOnline: {
    // id: {
    // name: '',
    //sessionControl: number
    // }
  },
}).write();

const app = express();
app.use(cors());
app.use(bodyParser.json());

let t = 0;

app.use("/api/", (req, res, next) => {
  console.log(req.body, "BODYYYYYYYYYY");

  if (req.body.marker === "newuser") {
    db.set(`users[${req.body.name}]`, {
      pass: req.body.pass,
      contacts: [],
    }).write();
    const userId = uniqid();
    const sessionControl = uuid();
    db.set(`usersOnline[${userId}]`, {
      name: req.body.name,
      sessionControl: sessionControl,
    }).write();

    setTimeout(() => {
      res.json({
        userId: userId,
        userName: req.body.name,
        sessionControl: sessionControl,
      });
    }, 800);
  } else if (req.body.marker === "login") {
    if (
      Object.keys(db.get("users").value()).includes(req.body.name) &&
      db.get(`users.${req.body.name}.pass`).value() === req.body.pass
    ) {
      const userId = uniqid();
      const sessionControl = uuid();
      db.set(`usersOnline[${userId}]`, {
        name: req.body.name,
        sessionControl: sessionControl,
      }).write();

      setTimeout(() => {
        res.json({
          userId: userId,
          userName: req.body.name,
          sessionControl: sessionControl,
          contacts: [...db.get(`users.${req.body.name}.contacts`).value()],
        });
        // res.json(req.body);
      }, 800);
    } else {
      res.json({
        userId: "",
        userName: "pass_log_incorrect",
      });
    }
    // const users = Object.keys(db.get('users').value()).includes(req.body.name);
    // const pass = db.get(`users.${req.body.name}.pass`).value();
    // const isPass = pass === req.body.pass ? true : false;
    // const test = users.includes(req.body.name);
    // console.log(users);
    // console.log(pass, 'Pass');
    // console.log(isPass, 'isPass');
    // console.log(test, 'TEST-------');
  } else if (req.body.marker === "add") {
    if (
      Object.keys(db.get("usersOnline").value()).includes(req.body.userId) &&
      db.get(`usersOnline.${req.body.userId}.sessionControl`).value() ===
        req.body.sessionControl
    ) {
      const user = db.get(`usersOnline.${req.body.userId}.name`).value();
      db.get(`users.${user}.contacts`)
        .push(...req.body.contacts)
        .write();
      const newSessionControl = uuid();
      console.log(newSessionControl, "newSessionControl");
      db.get(`usersOnline.${req.body.userId}.sessionControl`)
        .assign({ sessionControl: newSessionControl })
        .write();
      res.json({
        sessionControl: newSessionControl,
        status: "ok",
      });
    }
  }

  // console.log(db.getState());

  // res.json(req.body)
  // if(req.method === 'GET' && req.query.key === key) {
  //   res.json(db.get('contacts'))
  // } else if (req.method === 'POST' && req.query.key === key && !req.body.marker) {
  //   db.get('contacts')
  //   .push(...req.body)
  //   .write()
  // }
  // else if (req.method === 'POST' && req.query.key === key && req.body.marker === 'del'){
  // db.update('contacts', contacts => {
  //   let idx = 0;
  //   contacts.forEach((el, index) => {
  //     if(el.id === req.body.id){
  //       idx = index;
  //       }
  //     }
  //   )
  //   contacts.splice(idx, 1);
  //   return contacts
  //   }
  // )
  // .write()
  // }

  t++;
  console.log(`${t} відбувся запит на свервер`);
});

app.use("/", express.static(__dirname + "/cv"));

// app.listen(80);
app.listen(80, () => {
  console.log("Сервер слухає порт 80");
});
https.createServer(options, app).listen(443);
