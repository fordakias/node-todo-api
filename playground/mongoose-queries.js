const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Query find Todos
var id = '5c2623b14542464a54f50967';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log('TodoById', todo);
}).catch((e) => console.log(e));

// Query find User
var id_user = '5c269c903fff6b12e01a1b95';

User.findById(id_user).then((user)=>{
  if(!id_user){
    return console.log('Unable to find User');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e) =>{ console.log(e)
});
