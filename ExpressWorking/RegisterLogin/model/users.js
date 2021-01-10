const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    email:String,
    age:String,
    password:String,
});

module.exports = mongoose.model('users',userSchema); 