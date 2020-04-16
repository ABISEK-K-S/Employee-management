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
    // console.log("hi");
      con.connect(function(err)
         { 
                var sql=`select * from employee`
                con.query(sql,function(err,result,fields)
                  {
                     if(err) throw err;
                     results='hello everybody !'
                     //res.send(JSON.stringify(result));
                     res.send(result)
                     res.end("YES"); 
                   })
   
         })         
       });

   

   module.exports = router;