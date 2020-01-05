const express = require('express');
const connection = require('./../../helpers/db');
const router = express.Router();


// in Postman, add users in url http://localhost:5000/auth/signup
router.post('/signup', function(req, res, next) {
   const q = `INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`;
   const userInfo = req.body;
   //console.log("userInfo",userInfo)
   connection.query(q,[userInfo.email, userInfo.password, userInfo.name, userInfo.lastname], (error, results, fields) => {
      /* previously, before quest 050:
      if(error) res.status(500).end();
      res.send('User added!'); */
      if (error)
         res.status(500).json({ flash:  error.message });
      else
         res.status(200).json({ flash:  "User has been signed up!" });
      res.end();
   })
});

module.exports = router;


