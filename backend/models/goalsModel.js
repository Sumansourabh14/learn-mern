const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    goal: {
        type: String,
        required: [true, "Please enter a text value"],
    }
}, {
    timestamps: true
});

const GoalModel = mongoose.model('Goal', goalSchema);

module.exports = GoalModel;