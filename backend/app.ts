const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/index.ts');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use(bodyParser.text());
app.use(express.json());

app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});
