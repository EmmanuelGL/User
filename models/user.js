const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name : {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    editable : {
        type: Boolean,
        required: true
    }
});
//se crea un mocdelo llamado User utilizando el ezquema userschema
module.exports = mongoose.model('User', UserSchema);