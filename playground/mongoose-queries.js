const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58a51abcc1b7ea8a71362e1711';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid!');
// }

// Todo.find({
//   _id: id,
// }).then((todos) => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id,
// }).then((todo) => {
//   console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID Not Found');
//   }
//
//   console.log(todo);
// }).catch((e) => {
//   console.log(e);
// });

// User.findById
// - user not Found
// - print user to screen
// - catch errors
var id = '58a51e50dd78a9caf3c08e98';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log(user);
}).catch((e) => {
  console.log(e);
});

// mongoosejs.com > docs > queries
