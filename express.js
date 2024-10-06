const express = require('express');

const app = express();

app.get('/', (req, res) => {
    
    return res.send(req.url);
});

app.get('/about', (req, res) => {
    res.send({'message': `Hi There ${req.query.vaibhav}`})
});

app.listen(3000, () => console.log("Your New Express Server Has Been Started! Congratulations"));