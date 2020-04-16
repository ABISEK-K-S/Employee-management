var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//database connectivity
var mysql = require('mysql');
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'staff'
});

const Auth = require('./routes/Auth');
app.use('/Auth', Auth);

const display=require("./routes/Display")
app.use('/display',display)

const search=require("./routes/Search")
app.use('/search',search)

const insert=require("./routes/Insert")
app.use('/insert',insert)

const update=require("./routes/Update")
app.use('/update',update)
 
const Delete=require("./routes/Delete")
app.use('/delete',Delete);

var port=3000
app.listen(port,function(){
  console.log(`Starting on PORT ${port}`);
})

