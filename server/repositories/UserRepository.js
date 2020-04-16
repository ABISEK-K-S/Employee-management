class UserRepository {
    getUserById(userId) {
        //dbb query
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