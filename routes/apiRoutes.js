const Workout = require('../models/workout.js');

module.exports = function(app) {
    app.get('/api/workouts', function(req, res) {
        Workout.find({}).then(function(workout) {
            res.json(workout);
        });
    });

    app.put('/api/workouts/:id', function(req, res) {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }}).then(function(workout) {
            res.json(workout);
        })
    });

    app.post('/api/workouts', function({ body }, res) {
        Workout.create(body).then(function(workout) {
            res.json(workout);
        });
    })

    app.get('/api/workouts/range', function(req, res) {
        Workout.find({}).sort({ _id: -1 }).limit(7).then(function(workout) {
            res.json(workout);
        });
    })
};