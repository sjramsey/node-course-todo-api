// google: node mongodb native

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count:', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('58a182edaa85be2c02c3e36d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  //
  db.collection('Users').find({name: 'Trudi Bons'}).toArray().then((users) => {
    console.log('Users');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });
  //
  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.close();
});
