const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Removes all records!
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findOneAndRemove({_id: '58a2d87b140cb419ba216be1'}).then((todo) => {
  console.log(todo);
});

//Todo.findByIdAndRemove()
Todo.findByIdAndRemove('58a2d87b140cb419ba216be1').then((todo) => {
  console.log(todo);
});
