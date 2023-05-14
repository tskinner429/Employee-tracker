const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );


  db.connect ((function (err){
    if (err) throw err;
  }));

  module.exports = db;