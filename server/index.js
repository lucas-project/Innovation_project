const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const composers = require('./routes/composers');
const pieces = require('./routes/pieces');
const express = require('express');
const app = express();

// mongoose.connect('mongodb+srv://maye:2110301186@cluster0.csodksa.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb://localhost:27017/corelia')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/composers', composers);
app.use('/api/pieces', pieces);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));