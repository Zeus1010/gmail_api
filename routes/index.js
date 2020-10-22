var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

var auth = {
  type: 'oauth2',
  user: 'vivek.bhanushali16@siesgst.ac.in',
  clientId: '14769239873-hkesi4edl9neccpv3n3aid5h0g8bke18.apps.googleusercontent.com',
  clientSecret: '8iqKV8OfwVm-vtMIRbdUM1cU',
  refreshToken: '1//04h_f4w1Jn8B7CgYIARAAGAQSNwF-L9Irc4RMLVmf4m8sTgqH7_NYxnmU1b2GlDcCy4sPLxrOXU0U8XpNB2qy82zusAR5UPqfYHU',
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
