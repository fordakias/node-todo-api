const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id:'5c277706435737eb8d9463d5'}).then((todo) => {
  
});

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5c277706435737eb8d9463d5').then((todo) => {
  console.log(todo);
});
