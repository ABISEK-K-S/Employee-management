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
  
    console.log("\n\nEmployee ID-->",req.body.employee_id);
     con.connect(function(err)
        {   
          var search=req.body.employee_id;
          if((search==0)||(search=="")){
               res.send("Invaild delete input")
               console.log("Invaild delete input")}
          else {             
               var sql=`delete from employee where employee_id='${search}' `
               con.query(sql,function(err,result,fields)
                 {
                    if(err) throw err;
                    console.log(result);
                    res.send("\n\nDeleted successfully")
                    console.log("\n\nDeleted successfully");      
                  }
                 );}
                 
        })    
               
    });
   module.exports = router;