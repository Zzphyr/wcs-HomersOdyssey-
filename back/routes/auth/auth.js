const express = require('express');
const connection = require('./../../helpers/db');
const router = express.Router();

router.post('/signup', function(req, res, next) {
   const q = `INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`;
   const userInfo = req.body;
   //console.log("userInfo",userInfo)
   connection.query(q,[userInfo.email, userInfo.password, userInfo.name, userInfo.lastname], (error, results, fields) => {
      if(error) res.status(500).end();
      res.send('User added!');
      res.end();
   })
});

module.exports = router;


