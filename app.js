// importing modules
require('dotenv').config();
let exphbs = require('express-handlebars');
let express = require('express');
let session = require('express-session');
let hlemet = require('helmet');
let morgan = require('morgan');
let passport = require('passport');
let dbconnection = require('./db/connection')

let app = express();


// express session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))


// basic security middleware


// view engine set up 

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// db connection section
dbconnection.connection()

// app middleware
app.use(express.static('public'))
app.use(morgan('dev'))
express.urlencoded({extended : false })
express.json()

// passport config
require('./passport/oAuth').passportAuth(passport);



// passport middleware 
app.use(passport.initialize());
app.use(passport.session());



// routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


    
module.exports = app;











 








