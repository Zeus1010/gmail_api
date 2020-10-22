var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

router.use(bodyParser.json());


/* authentication codes removed */

var auth = {
  type: 'oauth2',
  user: '@gmail.com',
  clientId: '....',
  clientSecret: ''....',
  refreshToken: '....',,
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* code for api */
router.post('/', function(req, res, next){
var mailOptions = {
      from: req.body.name,
      to: 'aaditya.gurav16@siesgst.ac.in',
      subject: 'My site contact from: ' + req.body.name,
      text: req.body.subject,
      html: 'Name: ' + req.body.name + 
            '<br></br> Id: ' +  req.body.id + 
            '<br></br> Subject: ' + req.body.subject,
  };
var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth,
  });
transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
          return console.log(err);
      } else {
          console.log(JSON.stringify(res));
      }
  });
});

module.exports = router;
