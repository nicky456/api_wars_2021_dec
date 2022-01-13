const express = require("express");
const cors = require("cors");
const session = require('express-session')
const bodyParser = require("body-parser");
const axios = require("axios");
const passport = require('passport');
require('./passport-setup');

const users = {}

const app = express();

app.use(cors());

app.use(session({
  secret: "apiwars-session",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

// const isLoggedIn = (res, req, next) =>{
//   if (req.user){
//       next();
//   }else{
//     res.sendStatus(400);
//   }
// }

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const kliensReq = async (pageNum) => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/planets/?page=${pageNum}`
   );
    return response.data.results;
  } catch (error) {
    return false
  }
  
};

app.get("/api/planets/:planetNum", async (req, res) => {
  const data = await kliensReq(req.params.planetNum);
  res.send(data);
});

app.get("/failed", (req, res) => {
  res.send("You failed to log in!");
});

app.get("/good", (req, res) => {
  res.send(`Welcome dear ${req.user.displayName}`);
});

app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good')
  });

app.get('/logout', (req, res)=>{
  req.session = null;
  req.logout();
  res.redirect('/')
})

app.listen(8000);
