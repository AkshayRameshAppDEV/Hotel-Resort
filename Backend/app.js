const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; // change port if you want

app.use(cors());

// connect to mongodb database
mongoose.connect('mongodb://localhost/ResortApp', {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Resort app db connection successful'));

app.use(express.json());

// redirect /users to usersRouter
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// redirect /rooms to roomsRouter
const roomsRouter = require('./routes/rooms');
app.use('/rooms', roomsRouter);

// redirect /rooms to roomsRouter
const reservationsRouter = require('./routes/reservations');
app.use('/reservations', reservationsRouter);

app.get('/', (req, res) => {
    res.send("This is the resort app.");
})

app.listen(port, () => console.log(`Resort app listening on port ${port}`));