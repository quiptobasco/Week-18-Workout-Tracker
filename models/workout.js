const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        { 
            type: {
                _id: false,
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

workoutSchema.virtual('totalDuration').get(function() {
    let totalDuration = 0;
    this.exercises.forEach(exercise => {
        totalDuration += exercise.duration;
    });
    return totalDuration;
});

workoutSchema.set('toJSON', { virtuals: true });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;