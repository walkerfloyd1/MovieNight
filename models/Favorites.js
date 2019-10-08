const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    favoriteTheaters: {
        type: Array
    },
    favoriteRestaurant: {
        type: Array
    }
});

module.exports = mongoose.model("favorite", FavoriteSchema)