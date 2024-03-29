const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const path = require('path');

mongoose.connect('mongodb+srv://oce-bert-31:M1N2O1303@cluster1.fvu9kvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/books', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;