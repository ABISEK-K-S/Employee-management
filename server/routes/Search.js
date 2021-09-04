const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
const authController = new AuthController();
var mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "staff",
});

router.post("/", function (req, res) {
  console.log("\n\nEmployee ID-->", req.body.employee_id);
  con.connect(function (err) {
    var search = req.body.employee_id;
    if (search == 0) {
      console.log("Invaild search input");
      res.send("Invaild search input");
    } else {
      var sql = `select * from employee where employee_id='${search}' `;
      con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        if (result == 0) {
          res.send("Employee not found!");
          console.log("\n\nEmployee not found!\n\n");
        } else {
          console.log(result);
          res.json(result);
        }
      });
    }
  });
  //  res.send({outcome:'success'})
  //  res.end("yes");
});
module.exports = router;
