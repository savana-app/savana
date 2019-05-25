var express = require('express');
var router = express.Router();
path = require('path');
/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 */


/* route requests for static files to appropriate directory */
var staticPath = path.join(__dirname, '../public/');
router.use('/public', express.static(staticPath))


/* final catch-all route to index.html defined last */
router.get('/*', (req, res) => {
  var htmlFile = path.join(__dirname, '../views/index.html');
  res.sendFile(htmlFile);
})


module.exports = router;
