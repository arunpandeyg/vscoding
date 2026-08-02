import mongoose from "mongoose";
const foodSchema = new mongoose.Schema({
    foodname: {
        type: String,
        require: true
    },
    daysSinceIAte: {
        type: Number,
        require: true
    }
});
const food = mongoose.food('foodData', 'foodSchema');
module.exports = food;