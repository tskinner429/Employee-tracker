const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'holyspartan69',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );


  db.connect ((function (err){
    if (err) throw err;
  }));

  module.exports = db;