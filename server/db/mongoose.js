var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

// mongodb+srv://bek:bekdev2605@cluster0.onni8.mongodb.net/shifo?retryWrites=true&w=majority
//change the database with yours
mongoose.connect("mongodb+srv://bek:bekdev2605@cluster0.onni8.mongodb.net/shifo?retryWrites=true&w=majority");

module.exports = {mongoose};
