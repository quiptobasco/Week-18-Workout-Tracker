const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

// const db = require('./models/Workout');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Workout', { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
});