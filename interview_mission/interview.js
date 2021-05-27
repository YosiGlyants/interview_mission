const express  = require('express');

const usersRoutes = require('./users.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/',(req,res) =>{
    res.send('welcome');
});

app.listen(3000, () => console.log('Server started'));