// var MongoClient = require('mongodb').MongoClient, format = require('util').format;

// MongoClient.connect('mongodb://localhost/cypress_with_mongodb', function(err, db){
//     if(err){
//         throw err
//     }
//     else{
//         console.log('connected..!!!')
//     }
//     db.close()
// })


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'cypress_with_mongodb';
MongoClient.connect(connectionURL,{useUnifiedTopology:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect database");
    }
    const db = client.db(databaseName);

    db.collection('cypress').find({}).toArray((error,people)=>{
        console.log(people);
    })
});
