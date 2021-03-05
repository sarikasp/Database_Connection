const client = require('./postgres_test')

// client.connect()

// client.query("SELECT * from Cypress where id=$1", [2], (err, result) =>{
//     if(!err){
//         console.log(result.rows)
//     }
//     client.end()
// })

// Asynch await

// const query = async()=>{

//     await client.connect();

//     client.query("SELECT * from Cypress where id=$1", [2], (err, result) =>{
//         if(!err){
//             console.log(result.rows)
//         }
//         client.end()
//     })

// }

// query();


// (async()=>{

//     await client.connect();

//     client.query("SELECT * from Cypress where id=$1", [2], (err, result) =>{
//         if(!err){
//             console.log(result.rows)
//         }
//         client.end()
//     })

// })();


// (async () =>{
//     await client.connect();
//     const result = await client.query("SELECT * from Cypress where id=$1", [2])
//     console.log(result.rows);
//     client.end();
// })();

