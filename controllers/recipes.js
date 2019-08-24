const User = require('../models/user')

const index = (req, res, next) => {
    User.find({})
    .then((users)=> {
        //res.status(200).json(movies)
        res.render('recipes/index', {
            users: users,
            user: req.user,
            name: req.query.name
        })
    })
    .catch((err)=> {
        console.log(err)
        res.status()
    })
}

module.exports = {
    index
}