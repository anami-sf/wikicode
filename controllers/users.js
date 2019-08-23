const User = require('../models/user')

const index = (req, res, next) => {
    User.find({})
    .then((users)=> {
        //res.status(200).json(movies)
        res.render('users/index', {
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

// function index(req, res, next) {
//     User.find({}, (err, users) => {
//         res.render('users/index', {
//             users: users,
//             user: req.user,
//             name: req.query.name
//         })
//     })
// }

module.exports = {
    index
}