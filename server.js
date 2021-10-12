const express = require('express');
const app = express();

app.get('/', (req, res) => {
    debugger;
    res.send('Hello From Docker container!!!!!!');
});

app.listen(3000, () => {
    console.log('Servier is listening on port: 3000');
});