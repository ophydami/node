const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the homepage Damilola shittu");
});

app.listen(3000, ()  => {
    console.log("Damiiiiiiiiiiii");
});