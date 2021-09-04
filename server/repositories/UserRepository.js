class UserRepository {
    getUserById(userId) {
        //db query
        var mysql = require('mysql');
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'staff'
});

        return userId;
    }
}