const Instruction = require('../models/instruction')

const create = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        //Explain this line, what is 'req.body'? where does it come from?
        flight.destinations.push(req.body)
        flight.save((err) => {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

const create = (req, res) => {
    Recipe.findById(req.params.id)
    .then((recipe)=> {
        Instruction.create(req.body)
        res.redirect(`/recipes/${recipe._id}`)
    })
    .catch((err)=> {
        console.log(err)
        res.status()        
    })
}

module.exports = {
    create
}