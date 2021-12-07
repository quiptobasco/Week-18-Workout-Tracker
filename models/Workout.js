const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        { 
            type: {
                type: String
            },
            name: {
                type: String,
                trim: true,
                required: 'Exercise name is required.'
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        }
    ]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = { Workout };