//const mongooseDB= require('mongoose');
//mongooseDB.connect('mongodb://localhost/iti');
///
const mongoose = require('mongoose');
let mongo_url = 'mongodb://localhost/iti';

if(process.env.NODE_ENV === 'production'){
    mongo_url = 'mongodb://admin:admin@ds251799.mlab.com:51799/iti'
}
mongoose.connect(mongo_url);