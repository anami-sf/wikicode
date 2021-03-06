const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')


// load the env vars
require('dotenv').config()

const indexRouter = require('./routes/index')
const recipesRouter = require('./routes/recipes')
const usersRouter = require('./routes/users')
const instructionsRouter = require('./routes/instructions')
const accountRouter = require('./routes/account')
const app = express()

// connect to the MongoDB with mongoose
require('./config/database')
require('./config/passport')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: '1L0V3myRubb3rDuck*',
  resave: false,
  saveUninitialized: true
}))
app.use( passport.initialize( ) )
app.use( passport.session( ) )

app.use('/', indexRouter)
app.use('/', recipesRouter)
app.use('/', usersRouter)
app.use('/', instructionsRouter)
app.use('/', accountRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
