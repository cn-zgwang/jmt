var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Express' });
});

/* GET product page. */
router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

/* GET party page. */
router.get('/party', function(req, res, next) {
  res.render('party', { title: 'Express' });
});

/* GET culture page. */
router.get('/culture', function(req, res, next) {
  res.render('culture', { title: 'Express' });
});

/* GET school page. */
router.get('/school', function(req, res, next) {
  res.render('school', { title: 'Express' });
});

/* GET develop page. */
router.get('/develop', function(req, res, next) {
  res.render('develop', { title: 'Express' });
});

/* GET contect page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

/* GET contect page. */
router.get('/about_new', function(req, res, next) {
  res.render('about_new', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_1', function(req, res, next) {
  res.render('news_1', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_2', function(req, res, next) {
  res.render('news_2', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_3', function(req, res, next) {
  res.render('news_3', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_4', function(req, res, next) {
  res.render('news_4', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_5', function(req, res, next) {
  res.render('news_5', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_6', function(req, res, next) {
  res.render('news_6', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_7', function(req, res, next) {
  res.render('news_7', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_8', function(req, res, next) {
  res.render('news_8', { title: 'Express' });
});

/* GET new news page. */
router.get('/news_9', function(req, res, next) {
  res.render('news_9', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

router.get('/party_1', function(req, res, next) {
  res.render('party_1', { title: 'Express' });
});


module.exports = router;
