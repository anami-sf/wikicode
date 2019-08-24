const User = require('../models/user')

const index = (req, res, next) => {
    User.find({})
    .then((users)=> {
        res.render('users/index', {
            users: users,
            user: req.user,
            //Why do we use req.query?
            //name: req.query.name
            name: req.user.name
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