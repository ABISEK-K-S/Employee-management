const router = require('express').Router();
const AuthController = require('../controllers/AuthController');
const authController = new AuthController();
var mysql = require('mysql');
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'staff'
});

router.post('/', function(req,res){  
    console.log(req.body);
    con.connect(function(err)
       {   
         con.query(`Insert into employee (first_name,last_name,department,email,phone) VALUES
          ('${req.body.first_name}','${req.body.last_name}','${req.body.department}','${req.body.email}',
          '${req.body.phone}')`,function(err,result)
           {
              if(err) throw err;
              console.log("inserted successfully")               
              res.end("yes");
           })
       }
   )});

   module.exports = router;
