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



const User = require('./mongodb_test')

mongoose.connect('mongodb://localhost/cypress_with_mongodb',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
User.find({}, function(err, users){
    if(err){
        throw err
    }
    else{
        console.log(users)
    }
})