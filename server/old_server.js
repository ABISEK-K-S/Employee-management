var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var cors = require('cors')
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

/*
// parse application/json
app.use(bodyParser.json())
app.get('/',function(req,res){
  res.sendfile("index.html");
});
*/


//database connectivity
var mysql = require('mysql');
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'staff'
});

//login
app.post('/login',function(req,res){  
   console.log(req.body.temp);
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
  )})


//update
app.post('/update',function(req,res){  
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

//search
app.post('/search',function(req,res){
   console.log(req.body.employee_id);
    con.connect(function(err)
       {   
         var search=req.body.employee_id;
         if(search==0)
           {
            console.log("Invaild search input")
           }
         else
         {  
              
              console.log(search.toString());
              var sql=`select * from employee where employee_id='${search}' `
              con.query(sql,function(err,result,fields)
                {
                   if(err) throw err;
                   if(result==0)
                   {
                     console.log("employee not found !")
                   }
                   else
                   {
                     console.log(result);      
                   }
                   })
         }
          })    
          res.send({outcome:'success'})
          res.end("yes"); 
        })        

//display
app.post('/display',function(req,res){  
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
    })   


//delete        
app.post('/delete',function(req,res){  
  console.log("status received");
  con.connect(function(err)
     {         
      let deletes=req.body.delete_id;
      if(deletes==0)
         {
          console.log("Invaild search input")
         }
       else
       {  
            //deletes=""+deletes;
            console.log(deletes);
            //var sql=`select * from employee where employee_id='${deletes}' `
            var sql=`delete from employee where employee_id='${deletes}' `
            con.query(sql,`select * from employee  `,function(err,result,fields)
              {
                 if(err) throw err;
                 if(result==0)
                 {
                   console.log("employee not found !")
                 }
                 else
                 {
                 
                //   console.log(result);
                   console.log("\n\nDELETED SUCCESSFULLY\n\n");      
                   //console.log(result[0])
                  }
                 })
       }
        })    
         res.send({outcome:'success'})
         res.end("yes"); 
       })


var port=3000
app.listen(port,function(){
  console.log(`Starting on PORT ${port}`);
})