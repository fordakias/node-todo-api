var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// POST GET _ Todos
app.post('/todos',(req, res)=>{
  // console.log(req.body);
  var todo = new Todo ({
    text: req.body.text
  })

  todo.save().then((doc)=>{
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/todos',(req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) =>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    return res.status(404).send();
  });
});



// POST GET _ User
app.post('/user',(req, res)=>{
  // console.log(req.body);
  var user = new User ({
    text: req.body.text
  })

  user.save().then((doc)=>{
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/user',(req, res)=>{
  User.find().then((user)=>{
    res.send({user});
  },(e)=>{
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});


// var newTodo = new Todo({
//   text: '  Cook dinner 2  '
// });
//
// newTodo.save().then((doc)=> {
//  console.log('Saved todo', doc);
//  mongoose.connection.close();
// }, (e) => {
// console.log('Unable to save', e);
//  mongoose.connection.close();
// });

module.exports = {app};
