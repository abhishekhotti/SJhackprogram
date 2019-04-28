function get_conn() {
    var mysql = require('mysql');
    return con = mysql.createConnection({
      host: 'localhost',
      user: 'un',
      password: 'pw',
      database: 'hackathon'
    })
  }
  
  function create_table() {
    var con = get_conn();
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = 'CREATE TABLE request (' +
        'firstname VARCHAR(64),' +
        'lastname VARCHAR(64),' +
        'age TINYINT UNSIGNED,' +
        'numpeople SMALLINT UNSIGNED,' +
        'priority VARCHAR(64),' +
        'numdays TINYINT UNSIGNED,' +
        'alergies VARCHAR(64),' +
        'therapy VARCHAR(16)'
      ')'
    })
  }
  
  function insert(json) {
    var mysql = require('mysql');
    var con = get_conn();
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO request (firstname, lastname, " + 
        "age, numpeople, priority, numdays, alergies, therapy) " +
        "VALUES ?";
      var values = [json.firstname, json.lastname, json.age,
        json.numpeople, json.priority, json.numdays,
        json.alergies, json.therapy];
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("record(s) inserted");
      });
    });
  }
  
  function select_all() {
    var con = get_conn();
    var selqu = 'Select * FROM request';
    con.query(selqu, function (err, result) {
      if (err) {
        res.writeHead(400, {
          'Content-Type': 'text/plain'
        })
        res.end('Invalid Credentials')
      } else {
        res.cookie('cookie', 'admin', {
          maxAge: 900000,
          httpOnly: false,
          path: '/'
        })
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        })
        res.end('Successful loging');
      }
    });
  }
  