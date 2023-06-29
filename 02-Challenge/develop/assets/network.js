// establishing mysql connection
const mysql = require('mysql2');
const network = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees',
});
network.connect(function (err) {
    if (err) throw err;
});
module.exports = network;
