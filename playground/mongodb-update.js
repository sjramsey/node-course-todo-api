// google: node mongodb native

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('58a18d87aa85be2c02c3e641')
  //   }, {
  //     // Google mongodb update operators
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }
  // ).then((result) => {
  //   console.log(result);
  // });

  // Change name
  // Increment age by one
  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("58a18159d56d0a183bb25ab1")
    }, {
      // Google mongodb update operators
      $inc: {
        age: 1
      },
      $set: {
        name: "Wally Kazaam"
      }
    }, {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });

  // db.close();
});
