const express = require('express');
const router  = express.Router();


//routes go in controller page. each route routes to a page.

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



module.exports = router;




