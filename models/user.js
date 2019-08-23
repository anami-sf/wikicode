const mongoose = require('mongoose')

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
// var componentSchema = new mongoose.Schema({
//     text: String
// }, {
//     timestamps: true
// });

var userSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    avatar: String,
    recipes: Array, 
    gists: Array, 
    //component: [factSchema],  
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);