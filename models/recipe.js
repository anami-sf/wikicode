const mongoose = require('mongoose')

var recipeSchema = new mongoose.Schema({
    title: String,
    //stepNo: Number,
    category: {
        type: String,
        enum: ['Database', 'Application Server', 'Web Server', 'Host']
    },
    description: String, 
    steps: [{type: mongoose.Schema.Types.ObjectId, ref: 'Step'}], 
    //votes: [voteSchema],
    //gists: [{type: mongoose.Schema.Types.OjectId, ref: 'Gist'}],
    webServer: String,
    database: String,
    appServer: String,
    appHost: String
}, 
{
    timestamps: true
})


module.exports = mongoose.model('Recipe', recipeSchema)