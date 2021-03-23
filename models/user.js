const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    guildID : String,
    guildName : String,
    userID : String,
    username : String,
    accounts: Array
});

module.exports = mongoose.model("User", userSchema);