const mongoose = require('mongoose')

var voteSchema = new mongoose.Schema({
    user: String,
    value: Number,
})

var recipeSchema = new mongoose.Schema({
    title: String,
    //stepNo: Number,
    category: {
        type: String,
        enum: ['', ' ', 'Database', 'Application Server', 'Web Server', 'Host']
    },
    description: String, 
    instructions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Instruction'}], 
    votes: [voteSchema],
    //gists: [{type: mongoose.Schema.Types.OjectId, ref: 'Gist'}],
    webServer: String,
    database: String,
    appServer: String,
    appHost: String,
    author: String
}, 
{
    timestamps: true
})


module.exports = mongoose.model('Recipe', recipeSchema)