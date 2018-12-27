var mongoose = require ('mongoose');

var Todo = mongoose.model('Todo', {
 text:{
   type: String,
   required: true,
   minlenght: 1,
   trim: true
 },
 completed:{
   type: Boolean,
   default: false
 },
 compeletedAt:{
   type: Number,
   default: null
 }
}, "todos");

module.exports = {Todo};
