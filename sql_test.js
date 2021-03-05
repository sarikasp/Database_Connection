var mysql = require('mysql')
var connection = mysql.createConnection({

    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',  
    database: 'cypress_with_mysql'
});

connection.query('SELECT * FROM cypress', function(err, rows, field){
    if(!err){
        console.log(rows)
    }
    else{
        console.log(err)
    }
});
connection.end();

















