var express = require('express');
var router = express.Router();
//var mongojs  = require('mongojs');
var formidable = require('formidable');
 var fs = require('fs');
var bodyParser = require('body-parser');

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("testDB.db");

var nodemailer = require('nodemailer');

var randomstring = require("randomstring");





 var date = require('date-and-time');
var moment = require('moment');
var now= moment().format('MMMM Do YYYY, h:mm:ss a'); // July 17th 2018, 11:27:37 am
console.log(now);


 
var user_pass=randomstring.generate(7);
var user_id=randomstring.generate(7);

     
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'goelbuilder@gmail.com',
    pass: 'Goel@qwer#1'
  }
});
router.post('/checklogin',function(req,res){
    console.log("list called");
    var username = req.body.username;
    var pass=req.body.pass;
    console.log(username+"   username");
    console.log(pass+"  Password");
     //res.send(JSON.stringify(response));
	 db.serialize(function(){
			var sql = "select * from admin_login1 where username = '"+username+"' and password = '"+pass+"'";
			// send the records as JSON
			db.all(sql, function(err, row) {
                if(err){
                   console.log(err);
                    res.send(err);
                }
                else{
                console.log(row);
                 res.send(row);    
                console.log("Success"); 
                
                } 
			});

		});
});



router.post('/checkadminlogin',function(req,res){
    console.log("admin called");
    var uname = req.body.username;
    var password=req.body.password;
    console.log(uname  +"  username");
    console.log(password +"  Password");
     
   db.serialize(function(){
      var sql = "select * from admin_login1 where username ='"+uname+"' and password ='"+password+"'";
            db.all(sql, function(err, row) {
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else{
                //console.log(row);
                    res.send(row);    
                    console.log("Success");
                } 
      });

    });
});

router.post('/insert',function(req,res){
    console.log("Login called");
    var type=req.body.type1;
    var uname=req.body.uname;
    var username = req.body.username;
    var email=req.body.email;
    var address=req.body.address;
    var phone=req.body.phone;
    var aadhar=req.body.aadhar;
    var city=req.body.city;

    //var data = [username,email,address,phone,aadhar,city];
    console.log(username+"username");

     //res.send(JSON.stringify(response));
     db.serialize(function(){
            var sql = "insert into reg_cust (type,name,email,address,phone,aadhar,city,Date,uname) values ('"+type+"','"+username+"','"+email+"','"+address+"','"+phone+"','"+aadhar+"','"+city+"','"+now+"','"+uname+"' )";
            // send the records as JSON
            console.log(sql);
            db.all(sql,function(err,row){
                if(err){
                    console.log("Error");
                    console.log(err);                   
                    res.send(err);
                }
                else
                {
                    
                    res.send(row);   
                    console.log("row");
                    var mailOptions = {
                                        from: 'xyz@gmail.com',
                                        to: email,
                                        subject: 'Registration successfull',
                                        html: '<h1>Welcome</h1><p>That was easy!</p> your id is <B>'+uname+ ' </b>  and  your password is <b><i> '+ user_pass+'</b></i>   thankyou'
                                       } 
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response+'at email id == '+email);
  }
}); 

                }
            });

        });
});


router.post('/upload-file', function(req, res, next) {
  var fstream;
  if (req.busboy) {

    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      fstream = fs.createWriteStream(__dirname + '/../../public/my-files/' + filename);
      file.pipe(fstream);
      fstream.on('close', function(){
        console.log('file ' + filename + ' uploaded');
      });
    });
    req.busboy.on('finish', function(){
      console.log('finish, files uploaded ');
      res.json({ success : true});
    });
    req.pipe(req.busboy);
  }
});
var validator = require('aadhaar-validator')

router.post('/aadhar',function(req,res){
    console.log("aadhar called");
    var uname = req.body.aadhar;
   
    console.log(uname  +"  aadhar");
      if(validator.isValidNumber(uname) == true)
      {
        res.json({
          status:'success'
        });
        console.log()
      }
      else
      {
          res.json({
            status:'fail'
          });
      }

  
});


router.post('/search',function(req,res){
    console.log("search called");
    var uname = req.body.key;
    console.log(" called with " + uname);
    
   db.serialize(function(){
      var sql = "select locality from post  where  locality like '%"+uname+"%'  ";
            db.all(sql, function(err, row) {
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else{
                console.log(row);
                    res.send(row);    
                    console.log("Success");
                } 
      });

    });
});



router.post('/searchdat',function(req,res){
    console.log("serchdat called");
    var uname = req.body.dat;
    
   db.serialize(function(){
      var sql = "select * from post  where  locality = '"+uname+"'  ";
            db.all(sql, function(err, row) {
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else{
                console.log(row);
                    res.send(row);    
                    console.log("Success");
                } 
      });

    });
});




router.post('/searchdat1',function(req,res){
    console.log("serchdat1 called");    
   db.serialize(function(){
      var sql = "select * from post ";
            db.all(sql, function(err, row) {
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else{
                console.log(row);
                    res.send(row);    
                    console.log("Success");
                } 
      });

    });
});






module.exports = router;