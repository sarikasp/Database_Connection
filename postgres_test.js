const {Client} = require('pg')
const client = new Client({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'root',
    database: 'cypress_with_postgres'
    
})

// client.connect()

// client.query("SELECT * from Cypress", (err, result) =>{
//     if(!err){
//         console.log(result.rows)
//     }
//     client.end()
// })

// Event:

client.on("connect", () =>{
    console.log('Database Connection...!!')
})

client.on('end', () =>{
    console.log("Connection End...!!!")
})

module.exports = client;