//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59c33e42e4fc833e0ce7c2c8')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59c1dc5479abd7165dbdeb92')
    }, {
        $set: {
            name: 'eiei'
        },
        $inc: { age : 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    

    //db.close();
});