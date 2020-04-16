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
         con.query(`update employee set first_name="${req.body.first_name}",last_name="${req.body.last_name}",department="${req.body.department}",
         email="${req.body.email}",phone="${req.body.phone}" where employee_id="${req.body.employee_id}"`),function(err,result)
           {
              if(err) throw err;
              console.log("inserted successfully")               
              res.end("yes");
           }
       }
   )});

   module.exports = router;
